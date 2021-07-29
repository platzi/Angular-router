import { TestBed } from '@angular/core/testing';

import { CustomPreloadService } from './custom-preload.service';

describe('CustomPreloadService', () => {
  let service: CustomPreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
