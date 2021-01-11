import { TestBed } from '@angular/core/testing';

import { LoginsGuard } from './logins.guard';

describe('LoginsGuard', () => {
  let guard: LoginsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
