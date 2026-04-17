import { effect, Injectable, signal } from '@angular/core';
import { create, insertMultiple, search, Orama } from '@orama/orama';
import { stateList } from '../dataArray/products';
import { BehaviorSubject } from 'rxjs';
import * as CryptoJS from 'crypto-js';

export interface BM25SearchOptions {
  limit?: number;
  offset?: number;
  threshold?: number;
  tolerance?: number;
  properties?: string[];
  mode?: 'fulltext' | 'hybrid' | 'vector' | undefined;
}

@Injectable({ providedIn: 'root' })
export class SearchInfrastructureService {
  private readonly _bm25Config = signal<{
    documents: any;
    bm25DbSchema: any;  // Orama schema for BM25 full-text database
  } | null>(null);

  setBm25Config(config: { documents: any; bm25DbSchema: any }) {
    this._bm25Config.set(config);
  }
  /* ----------------------------------------
   * Constants
   * -------------------------------------- */
  private readonly MAX_QUERY_LENGTH = 5000;

  /* ----------------------------------------
   * Signals (state)
   * -------------------------------------- */
  private readonly _db = signal<any | null>(null);
  private readonly _isInitializing = signal(false);
  private readonly _progress = signal(0);
  private readonly _error = signal<string | null>(null);

  readonly db = this._db.asReadonly();
  readonly isInitializing = this._isInitializing.asReadonly();
  readonly progress = this._progress.asReadonly();
  readonly error = this._error.asReadonly();

  /* ----------------------------------------
   * Internals
   * -------------------------------------- */
  private searchVersion = 0;
  private lastConfigHash: string | null = null;
  constructor() {
    effect(() => {
      const config = this._bm25Config();

      if (config) {
        this.initialize(config.documents, config.bm25DbSchema);
      }
    });
    // this.initialize();
  }

  /* ----------------------------------------
   * Initialization
   * -------------------------------------- */
  async initialize(documents: any, dbSchema: any): Promise<void> {
    // const newHash = this.getConfigHash(documents);
    // console.log(newHash);
    //  Skip if same config
    // if (this.lastConfigHash === newHash) return;
    // this.lastConfigHash = newHash;
    if (!documents || documents.length === 0) return;
    try {
      this._isInitializing.set(true);
      this._progress.set(0);
      this._error.set(null);

      this.validateDocuments(documents);
      // Step 1 — DB create
      this._progress.set(10);
      const db = (await create({ schema: dbSchema })) as any;
      // Step 2 — insert (fast path)
      this._progress.set(40);
      await insertMultiple(db, documents);
      // Step 3 — done
      this._db.set(db);
      this._progress.set(100);
    } catch (e) {
      this._error.set(e instanceof Error ? e.message : 'Initialization failed');
    } finally {
      this._isInitializing.set(false);
    }
  }

  /* ----------------------------------------
   * BM25 Search (centralized)
   * -------------------------------------- */
  async searchBM25(query: string, options: BM25SearchOptions = {}) {
    const db = this._db();
    if (!db) throw new Error('BM25 database not initialized');

    this.validateQuery(query);
    const sanitized = this.sanitizeQuery(query);

    const currentVersion = ++this.searchVersion;
    const start = performance.now();

    const result = await search(db, {
      term: sanitized,
      limit: options.limit ?? 20,
      offset: options.offset ?? 0,
      threshold: options.threshold ?? 0,
      tolerance: options.tolerance ?? 0,
      properties: options.properties?.length ? options.properties : undefined,
      mode: options.mode ?? 'fulltext',
    });

    // ✅ race protection (latest wins)
    if (currentVersion !== this.searchVersion) {
      return null;
    }
    console.log(result, 'BM25 search result');
    return {
      hits: result.hits,
      count: result.count,
      elapsed: performance.now() - start,
    };
  }
  /*-----------------------------------------
   * For create Hash
   *-----------------------------------------*/
  private getConfigHash(documents: any[]): string {
    let hash = '';

    for (const doc of documents) {
      hash += doc.id; // or add more fields if needed
    }

    return CryptoJS.SHA256(hash).toString();
  }
  /* ----------------------------------------
   * Validation (React parity)
   * -------------------------------------- */
  private validateDocuments(docs: { id: string }[]) {
    if (!docs.length) {
      throw new Error('Cannot initialize with empty document list');
    }

    const ids = new Set<string>();
    for (const doc of docs) {
      if (!doc.id) {
        throw new Error('Document missing id');
      }
      if (ids.has(doc.id)) {
        throw new Error(`Duplicate document id: ${doc.id}`);
      }
      ids.add(doc.id);
    }
  }

  validateQuery(query: string) {
    if (!query.trim()) {
      throw new Error('Query cannot be empty');
    }
    if (query.length > this.MAX_QUERY_LENGTH) {
      throw new Error(`Query too long (max ${this.MAX_QUERY_LENGTH})`);
    }
  }

  sanitizeQuery(query: string): string {
    let sanitized = '';
    for (let i = 0; i < query.length; i++) {
      const c = query.charCodeAt(i);
      if (c === 0) continue;
      if ((c >= 0 && c <= 31) || (c >= 127 && c <= 159)) continue;
      sanitized += query[i];
    }
    return sanitized.trim();
  }

  /* ----------------------------------------
   * Lifecycle controls
   * -------------------------------------- */
  reset() {
    this.searchVersion++;
    this._db.set(null);
    this._progress.set(0);
    this._error.set(null);
  }

  dispose() {
    this.reset();
  }
}
