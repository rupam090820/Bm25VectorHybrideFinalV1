import { TestBed } from '@angular/core/testing';

import { HybrideServiceService } from './hybride-service.service';

describe('HybrideServiceService', () => {
  let service: HybrideServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HybrideServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
