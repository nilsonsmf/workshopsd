import { TestBed } from '@angular/core/testing';

import { FornecedorMockService } from './fornecedor-mock.service';

describe('FornecedorMockService', () => {
  let service: FornecedorMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornecedorMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
