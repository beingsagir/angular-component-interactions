import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodasparentComponent } from './godasparent.component';

describe('GodasparentComponent', () => {
  let component: GodasparentComponent;
  let fixture: ComponentFixture<GodasparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodasparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodasparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
