import { CommonModule } from '@angular/common';
import { Component, effect, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SearchResult,
  VectorSearchService,
} from '../../service/vector-search-service.service';
import { Product } from '../../Data/product';

@Component({
  selector: 'app-vector-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './vector-search.component.html',
  styleUrl: './vector-search.component.css',
})
export class VectorSearchComponent implements OnDestroy {
  // Inject service
  constructor(public vectorSearch: VectorSearchService<Product>) {}

  // Search state
  searchQuery = signal('');
  similarity = signal(0.3);
  limit = signal(20);

  // Results
  searchResults = signal<SearchResult<Product> | null>(null);

  // Debounce timer
  private searchTimeout: any = null;
  private searchRequestVersion = 0;

  // Suggestions
  suggestions = [
    'portable audio',
    'fitness tracking',
    'ergonomic workspace',
    'connectivity hub',
    'gaming peripherals',
  ];

  private readonly searchEffect = effect(() => {
    const query = this.searchQuery();
    if (query.trim()) {
      this.performDebouncedSearch();
    } else {
      this.searchResults.set(null);
    }
  });

  onSimilarityChange(event: Event) {
    const value = parseFloat((event.target as HTMLInputElement).value);
    this.similarity.set(value);

    // Re-search if query exists
    if (this.searchQuery().trim()) {
      this.performDebouncedSearch();
    }
  }

  onLimitChange(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value);
    this.limit.set(value);

    // Re-search if query exists
    if (this.searchQuery().trim()) {
      this.performDebouncedSearch();
    }
  }

  clearSearch() {
    this.vectorSearch.abortSearch();
    this.searchQuery.set('');
    this.searchResults.set(null);
  }

  private performDebouncedSearch() {
    // Clear existing timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Debounce for 300ms
    this.searchTimeout = setTimeout(async () => {
      await this.performSearch();
    }, 300);
  }

  private async performSearch() {
    const query = this.searchQuery().trim();
    const requestVersion = ++this.searchRequestVersion;

    if (!query) {
      this.searchResults.set(null);
      return;
    }

    try {
      const results = await this.vectorSearch.search(query, {
        limit: this.limit(),
        similarity: this.similarity(),
      });

      if (requestVersion === this.searchRequestVersion) {
        console.log('Search results:', results);
        this.searchResults.set(results);
      }
    } catch (error) {
      if (requestVersion !== this.searchRequestVersion) {
        return;
      }

      const message = error instanceof Error ? error.message : 'Search failed';

      if (message === 'Superseded' || message === 'Task aborted') {
        return;
      }

      console.error('Search error:', error);
      this.searchResults.set(null);
    }
  }

  ngOnDestroy(): void {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.vectorSearch.abortSearch();
  }
}
