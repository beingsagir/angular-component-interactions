import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatasparentComponent } from './catasparent.component';

describe('CatasparentComponent', () => {
  let component: CatasparentComponent;
  let fixture: ComponentFixture<CatasparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatasparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatasparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
