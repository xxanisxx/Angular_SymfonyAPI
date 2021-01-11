import { TestBed } from '@angular/core/testing';

import { TokensInterceptorService } from './tokens-interceptor.service';

describe('TokensInterceptorService', () => {
  let service: TokensInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokensInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
