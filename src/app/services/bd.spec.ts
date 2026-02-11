import { TestBed } from '@angular/core/testing';

import { Bd } from './bd';

describe('Bd', () => {
  let service: Bd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
