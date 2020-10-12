import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeercounterchildComponent } from './deercounterchild.component';

describe('DeercounterchildComponent', () => {
  let component: DeercounterchildComponent;
  let fixture: ComponentFixture<DeercounterchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeercounterchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeercounterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
