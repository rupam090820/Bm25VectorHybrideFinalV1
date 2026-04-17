import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'BM25',
    title: 'BM25 Search',
    loadComponent: () =>
      import('./BM25/bm25-search/bm25-search.component').then(
        (m) => m.Bm25SearchComponent,
      ),
  },
  {
    path: 'Home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Welcome to Home',
  },
  {
    path: 'Vector',
    loadComponent: () =>
      import('./vectorsearchNew/component/vector-search/vector-search.component').then(
        (m) => m.VectorSearchComponent,
      ),
    title: 'Vector Search',
  },
  {
    path: 'Hybrid',
    loadComponent: () =>
      import('./HybridSearch/component/hybride-search/hybride-search.component').then(
        (m) => m.HybrideSearchComponent,
      ),
    title: 'Hybrid Search',
  },
];
