import { TestBed } from '@angular/core/testing';

import { RegistersGuard } from './registers.guard';

describe('RegistersGuard', () => {
  let guard: RegistersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
