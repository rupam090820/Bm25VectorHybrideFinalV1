import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLoadingOverlayComponent } from './global-loading-overlay.component';

describe('GlobalLoadingOverlayComponent', () => {
  let component: GlobalLoadingOverlayComponent;
  let fixture: ComponentFixture<GlobalLoadingOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalLoadingOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalLoadingOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
