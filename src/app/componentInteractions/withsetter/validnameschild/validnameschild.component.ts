import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validnameschild',
  templateUrl: './validnameschild.component.html',
  styleUrls: ['./validnameschild.component.scss']
})
export class ValidnameschildComponent implements OnInit {


  
  private _player

  @Input()
  get name(): string {return this._player}
  set name(name: string){
    this._player = (name && name.trim()) || '<no name set>'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
