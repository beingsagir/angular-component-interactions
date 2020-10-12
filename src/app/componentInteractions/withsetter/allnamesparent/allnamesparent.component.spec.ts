import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnamesparentComponent } from './allnamesparent.component';

describe('AllnamesparentComponent', () => {
  let component: AllnamesparentComponent;
  let fixture: ComponentFixture<AllnamesparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllnamesparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllnamesparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
