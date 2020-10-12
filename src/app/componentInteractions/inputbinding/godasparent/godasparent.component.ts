import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-godasparent',
  templateUrl: './godasparent.component.html',
  styleUrls: ['./godasparent.component.scss']
})
export class GodasparentComponent implements OnInit {

  players : Person[]
  parent: string = 'God'

  constructor() { }

  ngOnInit(): void {
    this.players = [
      {
        'name': 'Messi',
        'age': 33
      },
      {
        'name': 'Sachin',
        'age': 40
      }
    ]
  }

}
