import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bm25SearchComponentComponent } from './bm25-search.component';

describe('Bm25SearchComponentComponent', () => {
  let component: Bm25SearchComponentComponent;
  let fixture: ComponentFixture<Bm25SearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bm25SearchComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bm25SearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
