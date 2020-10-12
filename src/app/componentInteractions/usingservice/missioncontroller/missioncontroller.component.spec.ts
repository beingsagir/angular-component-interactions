import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioncontrollerComponent } from './missioncontroller.component';

describe('MissioncontrollerComponent', () => {
  let component: MissioncontrollerComponent;
  let fixture: ComponentFixture<MissioncontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissioncontrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioncontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
