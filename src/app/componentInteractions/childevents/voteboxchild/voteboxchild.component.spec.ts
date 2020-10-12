import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteboxchildComponent } from './voteboxchild.component';

describe('VoteboxchildComponent', () => {
  let component: VoteboxchildComponent;
  let fixture: ComponentFixture<VoteboxchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteboxchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteboxchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
