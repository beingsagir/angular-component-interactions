import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-allnamesparent',
  templateUrl: './allnamesparent.component.html',
  styleUrls: ['./allnamesparent.component.scss']
})
export class AllnamesparentComponent implements OnInit {


    players :  string[] = ['Messi', 'Ronaldo', 'Ronaldinho', '', '  Mane ']

  constructor() { }

  ngOnInit(): void {
  }

}
