import { TestBed } from '@angular/core/testing';

import { MbEventService } from './mb-event.service';

describe('MbEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MbEventService = TestBed.get(MbEventService);
    expect(service).toBeTruthy();
  });
});
