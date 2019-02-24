import { TestBed } from '@angular/core/testing';

import { OwnnewsService } from './ownnews.service';

describe('OwnnewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnnewsService = TestBed.get(OwnnewsService);
    expect(service).toBeTruthy();
  });
});
