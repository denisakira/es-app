import { TestBed } from '@angular/core/testing';

import { PensamentoService } from './pensamento.service';

describe('PensamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PensamentoService = TestBed.get(PensamentoService);
    expect(service).toBeTruthy();
  });
});
