import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deercounterchild',
  templateUrl: './deercounterchild.component.html',
  styleUrls: ['./deercounterchild.component.scss']
})
export class DeercounterchildComponent implements OnInit {

  deers : number = 0

  constructor() { }

  addADeerToMyList(){
    this.deers++
  }

  ngOnInit(): void {
  }

}
