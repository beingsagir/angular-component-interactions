import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voteaggregator',
  templateUrl: './voteaggregator.component.html',
  styleUrls: ['./voteaggregator.component.scss']
})
export class VoteaggregatorComponent implements OnInit {

  agreed = 0
  disagreed = 0
  voters = ['Trump', 'Putin', 'Modi']

  voteplease(agreed: boolean){
    agreed? this.agreed++ : this.disagreed++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
