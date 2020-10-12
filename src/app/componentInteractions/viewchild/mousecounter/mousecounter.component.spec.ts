import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousecounterComponent } from './mousecounter.component';

describe('MousecounterComponent', () => {
  let component: MousecounterComponent;
  let fixture: ComponentFixture<MousecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousecounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MousecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
