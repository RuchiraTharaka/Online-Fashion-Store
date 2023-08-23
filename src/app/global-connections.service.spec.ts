import { TestBed } from '@angular/core/testing';

import { GlobalConnectionsService } from './global-connections.service';

describe('GlobalConnectionsService', () => {
  let service: GlobalConnectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalConnectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
