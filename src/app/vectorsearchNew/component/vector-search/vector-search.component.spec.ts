import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorSearchComponent } from './vector-search.component';

describe('VectorSearchComponent', () => {
  let component: VectorSearchComponent;
  let fixture: ComponentFixture<VectorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VectorSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
