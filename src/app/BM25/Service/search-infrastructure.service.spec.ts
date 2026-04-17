import { TestBed } from '@angular/core/testing';

import { SearchInfrastructureService } from './search-infrastructure.service';

describe('SearchInfrastructureService', () => {
  let service: SearchInfrastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchInfrastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
