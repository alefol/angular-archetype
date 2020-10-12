import { TestBed, inject } from '@angular/core/testing';

import { CanViewDetailGuard } from './can-view-detail.guard';

describe('CanViewDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanViewDetailGuard]
    });
  });

  it('should ...', inject([CanViewDetailGuard], (guard: CanViewDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
