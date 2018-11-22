import { TestBed } from '@angular/core/testing';

import { HumorService } from './humor.service';

describe('HumorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HumorService = TestBed.get(HumorService);
    expect(service).toBeTruthy();
  });
});
