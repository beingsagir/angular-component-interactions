import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteaggregatorComponent } from './voteaggregator.component';

describe('VoteaggregatorComponent', () => {
  let component: VoteaggregatorComponent;
  let fixture: ComponentFixture<VoteaggregatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteaggregatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteaggregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
