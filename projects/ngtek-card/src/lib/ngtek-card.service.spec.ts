import { TestBed } from '@angular/core/testing';

import { NgtekCardService } from './ngtek-card.service';

describe('NgtekCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgtekCardService = TestBed.get(NgtekCardService);
    expect(service).toBeTruthy();
  });
});
