import { TestBed } from '@angular/core/testing';

import { ProductgridService } from './productgrid.service';

describe('ProductgridService', () => {
  let service: ProductgridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductgridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
