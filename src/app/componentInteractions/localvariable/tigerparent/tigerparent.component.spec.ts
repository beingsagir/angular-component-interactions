import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigerparentComponent } from './tigerparent.component';

describe('TigerparentComponent', () => {
  let component: TigerparentComponent;
  let fixture: ComponentFixture<TigerparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TigerparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TigerparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
