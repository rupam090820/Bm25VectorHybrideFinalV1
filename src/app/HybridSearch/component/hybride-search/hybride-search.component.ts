import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../data/product';
import {
  HybrideServiceService,
  SearchResult,
} from '../../service/hybride-service.service';

@Component({
  selector: 'app-hybride-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './hybride-search.component.html',
  styleUrl: './hybride-search.component.css',
})
export class HybrideSearchComponent {
  // ============================================================================
  // SIGNALS (STATE)
  // ============================================================================

  searchQuery = signal('');
  results = signal<SearchResult<Product> | null>(null);
  hybridWeight = signal(0.5); // 0 = pure BM25, 1 = pure vector
  limit = signal(20);
  isSearching = signal(false);

  // Computed values
  bm25Percentage = () => Math.round((1 - this.hybridWeight()) * 100);
  vectorPercentage = () => Math.round(this.hybridWeight() * 100);

  // Suggestions for initial state
  suggestions = [
    'wireless headphones',
    'smart home',
    'fitness tracking',
    'portable audio',
    'gaming setup',
    'kitchen appliances',
  ];

  // ============================================================================
  // CONSTRUCTOR
  // ============================================================================
  debounceTimer: any = null;
  constructor(public hybrideSearchService: HybrideServiceService<Product>) {
    // Auto-search when query, weight, or limit changes (with debounce)
  }
  abc = effect(() => {
    // Track dependencies
    const query = this.searchQuery();
    const weight = this.hybridWeight();
    const searchLimit = this.limit();

    // Clear previous timer
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    // Debounce search (300ms)
    this.debounceTimer = setTimeout(() => {
      this.performSearch();
    }, 300);
  });
  // ============================================================================
  // SEARCH METHODS
  // ============================================================================

  async performSearch(): Promise<void> {
    const query = this.searchQuery().trim();

    // Clear results if query is empty
    if (!query) {
      this.results.set(null);
      return;
    }

    // Don't search if not ready
    if (!this.hybrideSearchService.isReady()) {
      return;
    }

    try {
      this.isSearching.set(true);

      const searchResults = await this.hybrideSearchService.searchHybrid(
        query,
        {
          weight: this.hybridWeight(),
          limit: this.limit(),
        },
      );
      console.log('Search results:', searchResults);
      this.results.set(searchResults);
    } catch (error) {
      console.error('Search error:', error);
      this.results.set(null);
    } finally {
      this.isSearching.set(false);
    }
  }

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  onSearchChange(): void {
    // Search is triggered automatically by effect
  }

  clearSearch(): void {
    this.searchQuery.set('');
    this.results.set(null);
  }

  onWeightChange(event: Event): void {
    const value = parseFloat((event.target as HTMLInputElement).value);
    this.hybridWeight.set(value);
  }

  onLimitChange(event: Event): void {
    const value = parseInt((event.target as HTMLInputElement).value);
    this.limit.set(value);
  }

  selectSuggestion(suggestion: string): void {
    this.searchQuery.set(suggestion);
  }
}
