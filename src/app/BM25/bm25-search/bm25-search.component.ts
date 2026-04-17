import { Component, effect, signal } from '@angular/core';
import { SearchInfrastructureService } from '../Service/search-infrastructure.service';
import { debounceTime, Subject } from 'rxjs';
import { stateList } from '../dataArray/products';

@Component({
  selector: 'app-bm25-search',
  imports: [],
  templateUrl: './bm25-search.component.html',
  styleUrl: './bm25-search.component.css',
})
export class Bm25SearchComponent {
  private input$ = new Subject<string>();

  searchTerm = signal('');
  limit = signal(20);
  results = signal<any | null>(null);
  error = signal<string | null>(null);

  constructor(public infra: SearchInfrastructureService) {
    this.infra.setBm25Config({
      documents: stateList,
      bm25DbSchema: {
        id: 'string',
        state_name: 'string',
        state_code: 'string',
      },
    });

    this.input$
      .pipe(debounceTime(300))
      .subscribe((value) => this.searchTerm.set(value));
  }

  onInput(value: string) {
    this.input$.next(value);
  }

  setLimit(value: number) {
    this.limit.set(Number(value));
  }

  /* ----------------------------------------
   * Search effect
   * -------------------------------------- */
  searchEffect = effect(async () => {
    const term = this.searchTerm();
    if (!term.trim()) {
      this.results.set(null);
      return;
    }
    try {
      const res = await this.infra.searchBM25(term, {
        limit: this.limit(),
        properties: ['state_name', 'state_code'], // if pass properties then only those fields are searched , if not pass properties then all fields are searched
      });
      this.results.set(res);
      this.error.set(null);
    } catch (e) {
      this.error.set(e instanceof Error ? e.message : 'Search failed');
      this.results.set(null);
    }
  });
}
