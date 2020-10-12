import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.scss']
})
export class CounterchildComponent implements OnInit {

  @Input() football: number
  @Input() cricket:number
  changelog: string[] = []

  ngOnChanges(changes: {[propkey: string]: SimpleChange}){
    const log : string[] = []
    for( const propName in changes){
      const changeProp = changes[propName]
      const value = JSON.stringify(changeProp.currentValue)
      if(changeProp.isFirstChange()){
         log.push(`No ${propName} Match hasbeen started yet! `)
      }else{
         log.push(`Total ${propName} Match count is ${value}`)
      }
    }
    this.changelog.push(log.join(' , ' ))
  }


  constructor() { }

  ngOnInit(): void {
  }

}
