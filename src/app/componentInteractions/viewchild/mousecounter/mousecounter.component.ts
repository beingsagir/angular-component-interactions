import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousecounter',
  templateUrl: './mousecounter.component.html',
  styleUrls: ['./mousecounter.component.scss']
})
export class MousecounterComponent implements OnInit {

  mouses : number = 0

  constructor() { }

  addADeerToMyList(){
    this.mouses++
  }

  ngOnInit(): void {
  }

}
