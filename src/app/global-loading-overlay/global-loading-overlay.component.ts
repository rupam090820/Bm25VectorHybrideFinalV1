import { CommonModule } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { SearchInfrastructureService } from '../BM25/Service/search-infrastructure.service';

@Component({
  selector: 'app-global-loading-overlay',
  imports: [CommonModule],
  templateUrl: './global-loading-overlay.component.html',
  styleUrl: './global-loading-overlay.component.css',
})
export class GlobalLoadingOverlayComponent {
  // expose infra signals directly (read-only)
  readonly progress: Signal<number>;
  readonly error: Signal<string | null>;

  // derived visibility
  readonly isVisible = computed(() => this.infra.isInitializing());

  constructor(private infra: SearchInfrastructureService) {
    this.progress = this.infra.progress;
    this.error = this.infra.error;
  }
}
