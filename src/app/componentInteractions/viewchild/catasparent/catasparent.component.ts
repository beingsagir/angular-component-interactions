import { Component, OnInit, ViewChild } from '@angular/core';
import { MousecounterComponent } from '../mousecounter/mousecounter.component';


@Component({
  selector: 'app-catasparent',
  templateUrl: './catasparent.component.html',
  styleUrls: ['./catasparent.component.scss']
})
export class CatasparentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MousecounterComponent)
  private ratcounter: MousecounterComponent;


  countARat(){
    this.ratcounter.mouses++;
  }

}
