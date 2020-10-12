import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractorparentComponent } from './interactorparent.component';

describe('InteractorparentComponent', () => {
  let component: InteractorparentComponent;
  let fixture: ComponentFixture<InteractorparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractorparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractorparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
