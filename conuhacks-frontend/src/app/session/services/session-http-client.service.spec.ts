import { TestBed } from '@angular/core/testing';

import { SessionHttpClientService } from './session-http-client.service';

describe('SessionHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionHttpClientService = TestBed.get(SessionHttpClientService);
    expect(service).toBeTruthy();
  });
});
