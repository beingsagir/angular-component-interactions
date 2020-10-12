import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-playersaschildren',
  templateUrl: './playersaschildren.component.html',
  styleUrls: ['./playersaschildren.component.scss']
})
export class PlayersaschildrenComponent implements OnInit {

  @Input() child: Person
  @Input() parent: String 

  constructor() { }

  ngOnInit(): void {
  }

}
