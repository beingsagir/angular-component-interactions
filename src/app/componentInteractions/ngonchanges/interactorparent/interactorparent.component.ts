import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactorparent',
  templateUrl: './interactorparent.component.html',
  styleUrls: ['./interactorparent.component.scss']
})
export class InteractorparentComponent implements OnInit {

  football = 0
  cricket = 0

  constructor() { }

  ngOnInit(): void {
  }

  newFootballMatch(){
    this.football++
  }

  newCricketMatch(){
    this.cricket++
  }

}
