import { TestBed } from '@angular/core/testing';

import { DateCalcService } from './date-calc.service';

describe('DateCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateCalcService = TestBed.get(DateCalcService);
    expect(service).toBeTruthy();
  });
});
