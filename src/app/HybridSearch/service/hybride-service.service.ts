import { Injectable, signal } from '@angular/core';
import {
  create,
  insertMultiple,
  search as oramaSearch,
  type AnyOrama,
} from '@orama/orama';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface SearchOptions {
  limit?: number;
  offset?: number;
  threshold?: number;
  tolerance?: number;
  properties?: string[];
}

export interface VectorSearchOptions extends SearchOptions {
  similarity?: number;
}

export interface HybridSearchOptions extends SearchOptions {
  weight?: number;
  similarity?: number;
}

export interface SearchResult<T> {
  hits: Array<{ document: T; score: number; rrfScore?: number }>;
  count: number;
  elapsed: number;
}

export interface HybridSearchConfig<T> {
  documents: T[];
  /** Key on T whose value is used as the unique document id */
  idField: keyof T;
  searchableFields: (keyof T)[];  // fields used for BM25 search + vector embedding generation
  embeddingBatchSize?: number;
  bm25DbSchema?: any;
  vectorDbSchema?: any;
}

// Worker Message Types
export type WorkerRequest =
  | {
      type: 'GENERATE_EMBEDDINGS';
      id: string;
      payload: { texts: string[]; batchSize: number };
    }
  | { type: 'EMBED_QUERY'; id: string; payload: { text: string } };

export type WorkerResponse =
  | {
      type: 'MODEL_READY';
      id: string;
      payload: { success: boolean; cached: boolean };
    }
  | {
      type: 'PROGRESS';
      id: string;
      payload: { current: number; total: number; percentage: number };
    }
  | {
      type: 'EMBEDDINGS_COMPLETE';
      id: string;
      payload: { embeddings: number[][] };
    }
  | {
      type: 'QUERY_EMBEDDING_COMPLETE';
      id: string;
      payload: { embedding: number[] };
    }
  | { type: 'ERROR'; id: string; payload: { message: string; stack?: string } };

// ============================================================================
// CONSTANTS
// ============================================================================

const MAX_QUERY_LENGTH = 5000;
const EMBEDDING_TIMEOUT_MS = 300000; // 5 minutes

// ============================================================================
// VALIDATION & SANITIZATION
// ============================================================================

function validateDocuments<T>(documents: T[], idField: keyof T): void {
  if (documents.length === 0) {
    throw new Error('Cannot initialize with empty document array');
  }

  const idSet = new Set<string>();
  const missingIds: number[] = [];
  const duplicateIds: string[] = [];

  documents.forEach((doc, index) => {
    const val = doc[idField];
    const id = val != null ? String(val) : '';
    if (!id) {
      missingIds.push(index);
    } else if (idSet.has(id)) {
      duplicateIds.push(id);
    } else {
      idSet.add(id);
    }
  });

  if (missingIds.length > 0) {
    throw new Error(
      `Documents missing valid '${String(idField)}' field at indices: ${missingIds.slice(0, 10).join(', ')}${
        missingIds.length > 10 ? ` and ${missingIds.length - 10} more` : ''
      }`,
    );
  }

  if (duplicateIds.length > 0) {
    throw new Error(
      `Duplicate document IDs found: ${duplicateIds.slice(0, 10).join(', ')}${
        duplicateIds.length > 10 ? ` and ${duplicateIds.length - 10} more` : ''
      }`,
    );
  }
}

function validateQuery(query: string): void {
  if (!query || query.trim().length === 0) {
    throw new Error('Query cannot be empty');
  }

  if (query.length > MAX_QUERY_LENGTH) {
    throw new Error(
      `Query too long (max ${MAX_QUERY_LENGTH} characters, got ${query.length})`,
    );
  }
}

function sanitizeQuery(query: string): string {
  let sanitized = '';

  for (let i = 0; i < query.length; i++) {
    const charCode = query.charCodeAt(i);

    if (charCode === 0) continue;
    if (
      (charCode >= 0 && charCode <= 31) ||
      (charCode >= 127 && charCode <= 159)
    ) {
      continue;
    }

    sanitized += query[i];
  }

  return sanitized.trim();
}

function cleanText(text: any): string {
  if (!text) return '';

  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\b\d+(\.\d+)?\s*(g|kg|mg|kcal|kj|ml|l)?\b/gi, ' ')
    .replace(/\(\s*\d+\s*\)/g, ' ')
    .replace(/[^\w\s.,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ============================================================================
// HYBRID SEARCH SERVICE
// ============================================================================

@Injectable({ providedIn: 'root' })
export class HybrideServiceService<T = unknown> {
  // ============================================================================
  // STATE MANAGEMENT (Signals)
  // ============================================================================

  private readonly _isInitializing = signal(false);
  private readonly _isReady = signal(false);
  private readonly _initProgress = signal(0);
  private readonly _error = signal<string | null>(null);
  private readonly _loadingStage = signal<
    'loading-model' | 'generating-embeddings' | null
  >(null);
  private readonly _vectorStatus = signal<'idle' | 'loading' | 'done'>('idle');

  readonly isInitializing = this._isInitializing.asReadonly();
  readonly isReady = this._isReady.asReadonly();
  readonly initProgress = this._initProgress.asReadonly();
  readonly error = this._error.asReadonly();
  readonly loadingStage = this._loadingStage.asReadonly();
  readonly vectorStatus = this._vectorStatus.asReadonly();

  // ============================================================================
  // INTERNAL STATE
  // ============================================================================

  private bm25DB: AnyOrama | null = null;
  private vectorDB: AnyOrama | null = null;
  private worker: Worker | null = null;
  private config: HybridSearchConfig<T> | null = null;
  private initializationPromise: Promise<void> | null = null;
  private workerReadyPromise: Promise<void> | null = null;
  private searchVersion = 0;
  private activeQueryResolver: {
    resolve: (v: number[]) => void;
    reject: (e: Error) => void;
    id: string;
  } | null = null;

  // ============================================================================
  // INITIALIZATION
  // ============================================================================

  /**
   * Step 1: Create the web worker and immediately load the model.
   * Call this as early as possible (e.g. app startup) so the model
   * is warm by the time initialize() is called.
   */
  async initWorker(): Promise<void> {
    if (this.worker) return;

    if (this.workerReadyPromise) return this.workerReadyPromise;

    this._isInitializing.set(true);
    this._initProgress.set(0);
    this._loadingStage.set('loading-model');

    this.workerReadyPromise = new Promise<void>((resolve, reject) => {
      this.worker = new Worker(
        new URL(
          '../../vectorsearchNew/webworker/vector-search.worker.ts',
          import.meta.url,
        ),
        { type: 'module' },
      );

      this.worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
        if (e.data.id === 'init') {
          if (e.data.type === 'MODEL_READY') {
            console.log('✅ Worker + model ready');
            this._loadingStage.set('generating-embeddings');
            resolve();
          } else if (e.data.type === 'ERROR') {
            reject(new Error(e.data.payload.message));
          }
        }

        // Route QUERY_EMBEDDING_COMPLETE to activeQueryResolver (latest-wins)
        if (e.data.type === 'QUERY_EMBEDDING_COMPLETE') {
          if (this.activeQueryResolver?.id === e.data.id) {
            this.activeQueryResolver.resolve(e.data.payload.embedding);
            this.activeQueryResolver = null;
          }
          return;
        }

        // Route ERROR for query requests to activeQueryResolver
        if (
          e.data.type === 'ERROR' &&
          this.activeQueryResolver?.id === e.data.id
        ) {
          this.activeQueryResolver.reject(new Error(e.data.payload.message));
          this.activeQueryResolver = null;
          return;
        }

        this.handleWorkerMessage(e.data);
      };

      this.worker.onerror = (error: ErrorEvent) => {
        console.error('❌ Worker error:', error);
        this._error.set(`Worker error: ${error.message}`);
        reject(error);
      };
    });

    return this.workerReadyPromise;
  }

  /**
   * Step 2: Initialize both BM25 and vector search databases.
   */
  async initialize(config: HybridSearchConfig<T>): Promise<void> {
    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    if (this._isReady()) {
      return;
    }

    this.initializationPromise = this._initialize(config);
    return this.initializationPromise;
  }

  private async _initialize(config: HybridSearchConfig<T>): Promise<void> {
    try {
      this.config = config;
      const {
        documents,
        searchableFields,
        embeddingBatchSize = 10,
        bm25DbSchema,
        vectorDbSchema,
      } = config;

      this._error.set(null);
      this._initProgress.set(0);

      console.log('🚀 Initializing hybrid search...');

      // Step 1: Validate documents
      validateDocuments(documents, config.idField);
      this._initProgress.set(5);

      // Step 2: Create BM25 database
      console.log('📊 Creating BM25 database...');
      const bm25Schema = bm25DbSchema ?? { id: 'string' };
      this.bm25DB = await create({ schema: bm25Schema });
      const bm25Docs = documents.map((doc) => ({
        ...(doc as any),
        id: String((doc as any)[config.idField]),
      }));
      await insertMultiple(this.bm25DB, bm25Docs);
      console.log(`✅ BM25 database ready (${documents.length} docs)`);
      this._initProgress.set(20);

      // Step 3: Ensure worker + model are ready
      if (this.workerReadyPromise) {
        await this.workerReadyPromise;
      } else {
        await this.initWorker();
      }
      this._initProgress.set(30);

      // Step 4: Generate embeddings for all documents
      this._loadingStage.set('generating-embeddings');
      console.log(
        `📊 Generating embeddings for ${documents.length} documents...`,
      );

      const documentTexts = documents.map((doc) =>
        searchableFields
          .map((field) => cleanText((doc as any)[field as string]))
          .filter(Boolean)
          .join('. '),
      );

      const embeddings = await this.generateEmbeddings(
        documentTexts,
        embeddingBatchSize,
      );
      this._initProgress.set(85);

      // Step 5: Create Orama vector database
      console.log('📊 Creating Orama vector database with HNSW index...');
      const vectorSchema = vectorDbSchema ?? {
        id: 'string',
        embedding: 'vector[384]',
      };
      this.vectorDB = await create({ schema: vectorSchema });

      // Step 6: Batch insert documents with embeddings
      const { idField } = config;
      const documentsWithEmbeddings = documents.map((doc, index) => {
        const id = String((doc as any)[idField as string]);
        if (vectorDbSchema) {
          return { ...(doc as any), id, embedding: embeddings[index] };
        }
        return { id, embedding: embeddings[index] };
      });

      await insertMultiple(this.vectorDB, documentsWithEmbeddings);
      console.log(`✅ Vector database ready`);

      this._initProgress.set(100);
      this._isReady.set(true);
      this._loadingStage.set(null);

      console.log('🎉 Hybrid search initialized successfully!');
    } catch (err) {
      console.error('❌ Initialization error:', err);
      const errorMessage =
        err instanceof Error ? err.message : 'Initialization failed';
      this._error.set(errorMessage);
      throw err;
    } finally {
      this._isInitializing.set(false);
      this._loadingStage.set(null);
      this.initializationPromise = null;
    }
  }

  // ============================================================================
  // WORKER COMMUNICATION
  // ============================================================================

  private generateEmbeddings(
    texts: string[],
    batchSize: number,
  ): Promise<number[][]> {
    if (!this.worker) throw new Error('Worker not initialized');

    const id = this.generateId();

    this.worker.postMessage({
      type: 'GENERATE_EMBEDDINGS',
      id,
      payload: { texts, batchSize },
    } as WorkerRequest);

    return this.waitForResponse<number[][]>(id, EMBEDDING_TIMEOUT_MS);
  }

  // Embed a single query — latest-wins: cancels previous in-flight query
  private embedQuery(text: string, requestId: string): Promise<number[]> {
    if (!this.worker) throw new Error('Worker not initialized');

    if (this.activeQueryResolver) {
      this.activeQueryResolver.reject(new Error('Superseded'));
      this.activeQueryResolver = null;
    }

    const embeddingPromise = new Promise<number[]>((resolve, reject) => {
      this.activeQueryResolver = { resolve, reject, id: requestId };
    });

    this.worker.postMessage({
      type: 'EMBED_QUERY',
      id: requestId,
      payload: { text },
    } as WorkerRequest);

    return embeddingPromise;
  }

  private handleWorkerMessage(msg: WorkerResponse): void {
    switch (msg.type) {
      case 'PROGRESS':
        if (this._isInitializing()) {
          const embeddingProgress =
            30 + (msg.payload.current / msg.payload.total) * 55;
          this._initProgress.set(Math.round(embeddingProgress));
        }
        break;

      case 'ERROR':
        if (this._isInitializing()) {
          this._error.set(msg.payload.message);
        }
        break;
    }
  }

  private waitForResponse<TResult>(
    id: string,
    timeoutMs: number,
  ): Promise<TResult> {
    return new Promise<TResult>((resolve, reject) => {
      let timeoutId: ReturnType<typeof setTimeout> | null = null;

      const handler = (e: MessageEvent<WorkerResponse>) => {
        if (e.data.id !== id) return;

        switch (e.data.type) {
          case 'EMBEDDINGS_COMPLETE':
            cleanup();
            resolve(e.data.payload.embeddings as TResult);
            break;

          case 'ERROR':
            cleanup();
            reject(new Error(e.data.payload.message));
            break;
        }
      };

      const cleanup = () => {
        if (timeoutId) clearTimeout(timeoutId);
        this.worker?.removeEventListener('message', handler);
      };

      this.worker?.addEventListener('message', handler);

      timeoutId = setTimeout(() => {
        cleanup();
        reject(new Error(`Worker timeout after ${timeoutMs}ms`));
      }, timeoutMs);
    });
  }

  // ============================================================================
  // SEARCH METHODS
  // ============================================================================

  async searchBM25(
    query: string,
    options: SearchOptions = {},
  ): Promise<SearchResult<T>> {
    if (!this._isReady() || !this.bm25DB) {
      throw new Error(
        'BM25 database not initialized. Call initialize() first.',
      );
    }

    if (!this.config) throw new Error('Configuration not found');

    validateQuery(query);
    const sanitized = sanitizeQuery(query);

    const startTime = performance.now();

    const results = await oramaSearch(this.bm25DB, {
      term: sanitized,
      limit: options.limit ?? 20,
      offset: options.offset ?? 0,
      threshold: options.threshold ?? 0,
      tolerance: options.tolerance ?? 0,
      properties: this.config.searchableFields.length ? this.config.searchableFields as string[] : undefined,
    });

    const elapsed = performance.now() - startTime;

    console.log(
      `🔍 BM25 search: "${sanitized}" → ${results.count} results (${elapsed.toFixed(1)}ms)`,
    );

    const { documents, idField } = this.config;
    const hits = results.hits.map((hit) => {
      const hitId = (hit.document as any).id;
      const indexedDoc = hit.document as T | undefined;
      const doc =
        indexedDoc && typeof indexedDoc === 'object' && String((indexedDoc as any)[idField as string]) === hitId
          ? indexedDoc
          : documents.find((d) => String((d as any)[idField as string]) === hitId);

      if (!doc) {
        throw new Error('Search returned a document that could not be resolved');
      }

      return { document: doc, score: hit.score };
    });

    return { hits, count: results.count, elapsed };
  }

  async searchVector(
    query: string,
    options: VectorSearchOptions = {},
  ): Promise<SearchResult<T>> {
    if (!this._isReady() || !this.vectorDB) {
      throw new Error(
        'Vector search not initialized. Call initialize() first.',
      );
    }

    if (!this.config) throw new Error('Configuration not found');

    validateQuery(query);
    const sanitized = sanitizeQuery(query);
    if (!sanitized) throw new Error('Query is empty after sanitization');

    const currentSearchVersion = ++this.searchVersion;
    const totalStartTime = performance.now();

    const requestId = this.generateId();
    const queryEmbedding = await this.embedQuery(sanitized, requestId);

    if (currentSearchVersion !== this.searchVersion) {
      throw new Error('Superseded');
    }

    const results = await oramaSearch(this.vectorDB, {
      mode: 'vector',
      vector: {
        value: queryEmbedding,
        property: 'embedding',
      },
      limit: options.limit ?? 20,
      offset: options.offset ?? 0,
      similarity: options.similarity ?? 0.3,
    });

    const elapsed = performance.now() - totalStartTime;

    if (currentSearchVersion !== this.searchVersion) {
      throw new Error('Superseded');
    }

    console.log(
      `🔍 Vector search: "${sanitized}" → ${results.count} results (${elapsed.toFixed(1)}ms)`,
    );

    const { documents, idField } = this.config;
    const vectorHits = results.hits.map((hit) => {
      const hitId = (hit.document as any).id;
      const doc = documents.find((d) => String((d as any)[idField as string]) === hitId);

      if (!doc) {
        throw new Error('Search returned a document that could not be resolved');
      }

      return { document: doc, score: hit.score };
    });

    return { hits: vectorHits, count: results.count, elapsed };
  }

  async searchHybrid(
    query: string,
    options: HybridSearchOptions = {},
  ): Promise<SearchResult<T>> {
    const weight = options.weight ?? 0.5;
    const startTime = performance.now();

    this._vectorStatus.set('loading');

    if (weight === 0) {
      const results = await this.searchBM25(query, options);
      this._vectorStatus.set('done');
      console.log(`🔍 Hybrid search (pure BM25): "${query}" → ${results.count} results`);
      return results;
    }

    if (weight === 1) {
      const results = await this.searchVector(query, {
        ...options,
        similarity: options.similarity ?? 0.1,
      });
      this._vectorStatus.set('done');
      console.log(`🔍 Hybrid search (pure vector): "${query}" → ${results.count} results`);
      return results;
    }

    const fetchLimit = Math.min((options.limit ?? 10) * 2.5, 100);
    const dynamicSimilarity =
      options.similarity ?? Math.max(0.1, 0.5 - weight * 0.4);

    const [bm25Results, vectorResults] = await Promise.all([
      this.searchBM25(query, { ...options, limit: fetchLimit }),
      this.searchVector(query, {
        ...options,
        limit: fetchLimit,
        similarity: dynamicSimilarity,
      }),
    ]);

    const combinedHits = this.reciprocalRankFusion(
      bm25Results.hits,
      vectorResults.hits,
    ).slice(
      options.offset ?? 0,
      (options.offset ?? 0) + (options.limit ?? 10),
    );

    const elapsed = performance.now() - startTime;
    this._vectorStatus.set('done');

    console.log(
      `🔍 Hybrid search (RRF): "${query}" → ${combinedHits.length} results (${elapsed.toFixed(1)}ms)`,
    );

    return { hits: combinedHits, count: combinedHits.length, elapsed };
  }

  private reciprocalRankFusion(
    bm25Hits: Array<{ document: T; score: number }>,
    vectorHits: Array<{ document: T; score: number }>,
    k = 60,
  ): Array<{ document: T; score: number; rrfScore: number }> {
    const rrfScores = new Map<string, number>();
    const docMap = new Map<string, T>();
    const idField = this.config!.idField as string;

    bm25Hits.forEach((hit, index) => {
      const id = String((hit.document as any)[idField]);
      rrfScores.set(id, (rrfScores.get(id) ?? 0) + 1 / (k + index + 1));
      docMap.set(id, hit.document);
    });

    vectorHits.forEach((hit, index) => {
      const id = String((hit.document as any)[idField]);
      rrfScores.set(id, (rrfScores.get(id) ?? 0) + 1 / (k + index + 1));
      docMap.set(id, hit.document);
    });

    return Array.from(rrfScores.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([id, rrfScore]) => ({ document: docMap.get(id)!, score: rrfScore, rrfScore }));
  }

  // ============================================================================
  // CONTROL METHODS
  // ============================================================================

  abortSearch(): void {
    this.searchVersion++;
    this._vectorStatus.set('idle');
    if (this.activeQueryResolver) {
      this.activeQueryResolver.reject(new Error('Superseded'));
      this.activeQueryResolver = null;
    }
    console.log('🛑 Search aborted');
  }

  private generateId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
