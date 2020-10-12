import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidnameschildComponent } from './validnameschild.component';

describe('ValidnameschildComponent', () => {
  let component: ValidnameschildComponent;
  let fixture: ComponentFixture<ValidnameschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidnameschildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidnameschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
