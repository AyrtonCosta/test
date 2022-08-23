import { TestBed } from '@angular/core/testing';

import { CurrentDailyRateService } from './current-daily-rate.service';

describe('CurrentDailyRateService', () => {
  let service: CurrentDailyRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentDailyRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
