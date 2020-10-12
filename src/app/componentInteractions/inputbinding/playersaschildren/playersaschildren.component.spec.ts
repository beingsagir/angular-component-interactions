import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersaschildrenComponent } from './playersaschildren.component';

describe('PlayersaschildrenComponent', () => {
  let component: PlayersaschildrenComponent;
  let fixture: ComponentFixture<PlayersaschildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersaschildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersaschildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
