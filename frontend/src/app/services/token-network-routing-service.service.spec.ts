import { TestBed } from '@angular/core/testing';

import { TokenNetworkRoutingService } from './token-network-routing.service';

describe('TokenNetworkRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service = TestBed.inject(TokenNetworkRoutingService);
    expect(service).toBeTruthy();
  });
});
