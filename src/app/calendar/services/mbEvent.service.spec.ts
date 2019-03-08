import { TestBed } from '@angular/core/testing';

import { MbEventService } from './mbEvent.service';

describe('MbEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MbEventService = TestBed.get(MbEventService);
    expect(service).toBeTruthy();
  });
});
