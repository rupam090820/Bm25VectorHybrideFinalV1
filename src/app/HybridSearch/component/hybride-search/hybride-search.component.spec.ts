import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybrideSearchComponent } from './hybride-search.component';

describe('HybrideSearchComponent', () => {
  let component: HybrideSearchComponent;
  let fixture: ComponentFixture<HybrideSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HybrideSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HybrideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
