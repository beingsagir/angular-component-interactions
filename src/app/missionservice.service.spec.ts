import { TestBed } from '@angular/core/testing';

import { MissionserviceService } from './missionservice.service';

describe('MissionserviceService', () => {
  let service: MissionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
