import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionserviceService } from 'src/app/missionservice.service';

@Component({
  selector: 'app-missionboard',
  templateUrl: './missionboard.component.html',
  styleUrls: ['./missionboard.component.scss']
})
export class MissionboardComponent implements OnInit {


  ngOnInit(): void {
  }

  @Input() confirmer: string 
  mission = '<no mission announced>'
  confirmed = false;
  announced = false;
  subscrioption: Subscription;

  
  constructor(private missionService: MissionserviceService) {
    this.subscrioption = missionService.missionAnnouncedObservable.subscribe(
      mission =>{
        this.mission = mission;
        this.announced = true
        this.confirmed = false
      }
    )
   }


   confirm(){
     this.confirmed = true;
     this.missionService.confirmMission(this.confirmer)
   }

   ngOnDestroy(){
      this.subscrioption.unsubscribe();
   }

}
