import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { GlobalLoadingOverlayComponent } from './global-loading-overlay/global-loading-overlay.component';
import { VectorSearchService } from './vectorsearchNew/service/vector-search-service.service';
import { Product, products } from './vectorsearchNew/Data/product';
import { HybrideServiceService } from './HybridSearch/service/hybride-service.service';
import { ANIMALS, ANIMALSProduct } from './data/documentsData';

@Component({
  selector: 'app-root',
  imports: [GlobalLoadingOverlayComponent, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'angularBm25WithOrama';
  constructor(
    public vectorSearch: VectorSearchService<Product>,
    // private hybrideSearch: HybrideServiceService<ANIMALSProduct>,
    private hybrideSearch: HybrideServiceService<Product>,
  ) {}

  async ngOnInit() {
    try {
      // Step 1: Boot both workers in parallel so model loads while app starts
      await Promise.all([
        this.vectorSearch.initWorker(),
        this.hybrideSearch.initWorker(),
      ]);

      // Step 2: Initialize vector DB — idField tells the service which field is the unique key
      await this.vectorSearch.initialize({
        documents: products,
        idField: 'id',
        searchableFields: ['name', 'description'],
        vectorDbSchema: {
          id: 'string',
          name: 'string',
          description: 'string',
          price: 'number',
          embedding: 'vector[384]',
        },
        embeddingBatchSize: 10,
      });

      // Step 3: Initialize hybrid search — product_id is the unique key for ANIMALSProduct
      // await this.hybrideSearch.initialize({
      //   documents: ANIMALS,
      //   idField: 'product_id',
      //   searchableFields: ['product_name', 'product_subheading'],
      //   embeddingBatchSize: 10,
      //   bm25DbSchema: {
      //     id: 'string',
      //     product_id: 'number',
      //     product_name: 'string',
      //     product_subheading: 'string',
      //     price: 'string',
      //   },
      //   vectorDbSchema: {
      //     id: 'string',
      //     product_id: 'number',
      //     product_name: 'string',
      //     product_subheading: 'string',
      //     price: 'string',
      //     embedding: 'vector[384]',
      //   },
      // });

      await this.hybrideSearch.initialize({
        documents: products,
        idField: 'id',
        searchableFields: ['name', 'description'],
        embeddingBatchSize: 10,
        bm25DbSchema: {
          id: 'string',
          name: 'string',
          description: 'string',
          price: 'number',
        },
        vectorDbSchema: {
          id: 'string',
          name: 'string',
          description: 'string',
          price: 'number',
          embedding: 'vector[384]',
        },
      });
    } catch (error) {
      console.error('Failed to initialize search:', error);
    }
  }
}
