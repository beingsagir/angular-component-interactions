import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-voteboxchild',
  templateUrl: './voteboxchild.component.html',
  styleUrls: ['./voteboxchild.component.scss']
})
export class VoteboxchildComponent implements OnInit {

  @Input() name:string
  @Output() voted = new EventEmitter<boolean>()
  didVote =false;

  vote(agreed:boolean){
    console.log(agreed)
    this.voted.emit(agreed);
    this.didVote = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
