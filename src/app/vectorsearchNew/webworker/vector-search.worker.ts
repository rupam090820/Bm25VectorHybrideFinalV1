/**
 * Enterprise Web Worker for Vector Embeddings
 *
 * Features:
 * ✅ Network retry with exponential backoff
 * ✅ Batch processing with progress updates
 * ✅ Model caching
 * ✅ IndexedDB embeddings cache
 * ✅ Auto model load on startup (IIFE)
 * ✅ Online/offline + WebGPU/WASM support
 *
 * @version 1.0.0-enterprise
 */

// ============================================================================
// TYPES
// ============================================================================

type WorkerRequest =
  | {
      type: 'GENERATE_EMBEDDINGS';
      id: string;
      payload: { texts: string[]; batchSize: number };
    }
  | { type: 'EMBED_QUERY'; id: string; payload: { text: string } }

type WorkerResponse =
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

const REMOTE_TRANSFORMERS_URL =
  'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.1.2';
const LOCAL_TRANSFORMERS_URL = new URL(
  '/transformers.min.js',
  self.location.origin,
).toString();
const MAX_RETRIES = 3;
// Offline Model Path
const LOCAL_MODEL_PATH = new URL('/models/', self.location.origin).toString();

// ============================================================================
// MODULE STATE
// ============================================================================

const DEFAULT_MODEL = 'Xenova/all-MiniLM-L6-v2';

let transformersModule: any = null;
let pipelineFn: any = null;
let envConfig: any = null;
let modelCache: any = null;
let modelState: 'loading' | 'ready' | 'error' = 'loading';
let cachePruned = false;
const DB_NAME = 'hybrid-search-cache';
const STORE_NAME = 'embeddings';
const LATEST_CACHE_KEY_META = '__meta__embeddings_latest_v2';

// ============================================================================
// UTILITY: RETRY LOGIC
// ============================================================================

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = MAX_RETRIES,
): Promise<T> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;

      const delay = Math.pow(2, attempt) * 1000;
      console.log(
        `[Worker] Retry ${attempt + 1}/${maxRetries} after ${delay}ms`,
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw new Error('Retry failed'); // TypeScript safety
}

// ============================================================================
// TRANSFORMERS INITIALIZATION
// ============================================================================

async function loadTransformersModule() {
  if (transformersModule) {
    return transformersModule;
  }

  if (!navigator.onLine) {
    transformersModule = await import(
      /* @vite-ignore */ LOCAL_TRANSFORMERS_URL
    );
    // ORT WASM/JSEP files default to CDN paths inside the bundle.
    // Override to local public/ copies so WebGPU backend works offline.
    transformersModule.env.backends.onnx.wasm.wasmPaths = '/';
    return transformersModule;
  }
  try {
    console.log('[Worker] Loading transformers from CDN...');
    transformersModule = await import(REMOTE_TRANSFORMERS_URL);
    console.log('[Worker] ✅ Transformers loaded from CDN');
    return transformersModule;
  } catch (error) {
    console.log('[Worker] Loading transformers from local fallback...');
    transformersModule = await import(LOCAL_TRANSFORMERS_URL);
    transformersModule.env.backends.onnx.wasm.wasmPaths = '/';
    return transformersModule;
  }
}

async function ensureTransformersReady() {
  if (pipelineFn && envConfig) {
    return { pipeline: pipelineFn, env: envConfig };
  }

  const module = await loadTransformersModule();
  pipelineFn = module.pipeline;
  envConfig = module.env;
  envConfig.useBrowserCache = true;

  return { pipeline: pipelineFn, env: envConfig };
}

// --- IndexedDB helpers ---

function openCacheDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE_NAME);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getCachedEmbeddings(cacheKey: any) {
  try {
    const db: any = await openCacheDB();
    return new Promise<void>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(cacheKey);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function setCachedEmbeddings(cacheKey: any, embeddings: any) {
  try {
    const db: any = await openCacheDB();
    return new Promise<void>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const latestKeyRequest = store.get(LATEST_CACHE_KEY_META);

      latestKeyRequest.onsuccess = () => {
        const previousKey = latestKeyRequest.result || null;
        if (previousKey && previousKey !== cacheKey) {
          store.delete(previousKey);
        }
        store.put(embeddings, cacheKey);
        store.put(cacheKey, LATEST_CACHE_KEY_META);
      };

      latestKeyRequest.onerror = () => {
        store.put(embeddings, cacheKey);
        store.put(cacheKey, LATEST_CACHE_KEY_META);
      };

      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
      tx.onabort = () => resolve();
    });
  } catch {
    // cache write failure is non-fatal
  }
}

async function cleanupStaleEmbeddingsCache() {
  try {
    const db: any = await openCacheDB();
    return new Promise<void>((resolve) => {
      const tx: any = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const latestKeyRequest = store.get(LATEST_CACHE_KEY_META);

      const prune = (latestKey: any) => {
        const cursorRequest = store.openCursor();
        cursorRequest.onsuccess = (event: any) => {
          const cursor = event.target.result;
          if (!cursor) return;

          const key = cursor.key;
          const keepMeta = key === LATEST_CACHE_KEY_META;
          const keepLatest = latestKey && key === latestKey;

          if (!keepMeta && !keepLatest) {
            cursor.delete();
          }

          cursor.continue();
        };
      };

      latestKeyRequest.onsuccess = () => {
        prune(latestKeyRequest.result || null);
      };

      latestKeyRequest.onerror = () => {
        prune(null);
      };

      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
      tx.onabort = () => resolve();
    });
  } catch {
    // cache cleanup failure is non-fatal
  }
}

async function computeCacheKey(texts: any) {
  // Length-prefixing prevents boundary ambiguities when concatenating texts.
  const payload = texts.map((text: any) => `${text.length}:${text}`).join('|');
  const bytes = new TextEncoder().encode(payload);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hashHex = [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return `embeddings_v2_${texts.length}_${hashHex}`;
}

async function checkWebGPU() {
  if (!('gpu' in navigator)) return false;

  try {
    const adapter = await navigator.gpu.requestAdapter();
    return !!adapter;
  } catch {
    return false;
  }
}

async function loadModel(pipeline: any, modelName: string) {
  const webgpu = await checkWebGPU();
  const device = webgpu ? 'webgpu' : 'wasm';
  const dtype = webgpu ? 'fp16' : 'q8';

  if (!navigator.onLine) {
    envConfig.allowRemoteModels = false;
    envConfig.allowLocalModels = true;
    envConfig.localModelPath = LOCAL_MODEL_PATH;

    return await pipeline('feature-extraction', modelName, {
      device,
      dtype,
    });
  }

  try {
    envConfig.allowRemoteModels = true;
    envConfig.allowLocalModels = false;

    return await pipeline('feature-extraction', modelName, {
      device,
      dtype,
    });
  } catch {
    envConfig.allowRemoteModels = false;
    envConfig.allowLocalModels = true;
    envConfig.localModelPath = LOCAL_MODEL_PATH;

    return await pipeline('feature-extraction', modelName, {
      device,
      dtype,
    });
  }
}

// ============================================================================
// AUTO INIT: Load model immediately when worker starts
// ============================================================================

(async () => {
  try {
    console.log('[Worker] Auto-loading model on startup...');

    if (!cachePruned) {
      await cleanupStaleEmbeddingsCache();
      cachePruned = true;
    }

    const { pipeline } = await ensureTransformersReady();

    modelCache = await retryWithBackoff(() => loadModel(pipeline, DEFAULT_MODEL));

    modelState = 'ready';
    console.log('[Worker] ✅ Model loaded successfully');

    self.postMessage({
      type: 'MODEL_READY',
      id: 'init',
      payload: { success: true, cached: false },
    } as WorkerResponse);
  } catch (error) {
    modelState = 'error';
    console.error('[Worker] ❌ Model auto-load failed:', error);
    self.postMessage({
      type: 'ERROR',
      id: 'init',
      payload: {
        message: error instanceof Error ? error.message : 'Model load failed',
        stack: error instanceof Error ? error.stack : undefined,
      },
    } as WorkerResponse);
  }
})();

// ============================================================================
// MESSAGE HANDLER
// ============================================================================

self.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const { type, payload, id }: any = event.data;

  // Guard: reject any request that arrives before the model is ready
  if (modelState !== 'ready') {
    self.postMessage({
      type: 'ERROR',
      id,
      payload: { message: 'Model not ready yet.' },
    } as WorkerResponse);
    return;
  }

  try {
    switch (type) {
      // ======================================================================
      // EMBED_QUERY: Embed a single search query — skips IndexedDB cache
      // ======================================================================
      case 'EMBED_QUERY': {
        const { text } = payload;
        const output = await modelCache(text, {
          pooling: 'mean',
          normalize: true,
        });
        self.postMessage({
          type: 'QUERY_EMBEDDING_COMPLETE',
          id,
          payload: { embedding: output.tolist()[0] },
        } as WorkerResponse);
        break;
      }

      // ======================================================================
      // GENERATE_EMBEDDINGS: Batch embed documents — uses IndexedDB cache
      // ======================================================================
      case 'GENERATE_EMBEDDINGS': {
        const { texts, batchSize = 10 } = payload;
        const cacheKey = await computeCacheKey(texts);
        const cached = await getCachedEmbeddings(cacheKey);

        if (cached) {
          self.postMessage({
            type: 'EMBEDDINGS_COMPLETE',
            payload: { embeddings: cached },
            id,
          } as WorkerResponse);
          break;
        }

        const embeddings: number[][] = [];
        const total = texts.length;

        for (let i = 0; i < texts.length; i += batchSize) {
          const batch = texts.slice(i, i + batchSize);

          const output = await modelCache(batch, {
            pooling: 'mean',
            normalize: true,
          });
          embeddings.push(...output.tolist());

          const processed = Math.min(i + batchSize, total);
          self.postMessage({
            type: 'PROGRESS',
            payload: { current: processed, total, percentage: Math.round((processed / total) * 100) },
            id,
          } as WorkerResponse);
        }

        await setCachedEmbeddings(cacheKey, embeddings);
        self.postMessage({
          type: 'EMBEDDINGS_COMPLETE',
          payload: { embeddings },
          id,
        } as WorkerResponse);
        break;
      }

      // ======================================================================
      default:
        throw new Error(`Unknown message type: ${type}`);
    }
  } catch (error) {
    console.error('[Worker] Error in message handler:', error);

    self.postMessage({
      type: 'ERROR',
      payload: {
        message:
          error instanceof Error ? error.message : 'Unknown worker error',
        stack: error instanceof Error ? error.stack : undefined,
      },
      id,
    } as WorkerResponse);
  }
};

// ============================================================================
// ERROR HANDLER
// ============================================================================

self.onerror = (error: any) => {
  console.error('[Worker] Global error:', error);

  self.postMessage({
    type: 'ERROR',
    payload: {
      message: error.message || 'Worker error',
      stack: error.error?.stack,
    },
  } as WorkerResponse);
};

console.log('[Worker] ✅ Worker initialized and ready');
