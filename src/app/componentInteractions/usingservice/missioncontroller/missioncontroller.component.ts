import { Component, OnInit } from '@angular/core';
import { MissionserviceService } from 'src/app/missionservice.service';

@Component({
  selector: 'app-missioncontroller',
  templateUrl: './missioncontroller.component.html',
  styleUrls: ['./missioncontroller.component.scss'],
  providers: [MissionserviceService]
})
export class MissioncontrollerComponent implements OnInit {

  constructor(private missionService : MissionserviceService) {
      missionService.missionConfirmedObservable.subscribe(
        confirmer =>{
          this.history.push(`${confirmer} has confirmed the mission`);
        }
      )
  }

  ngOnInit(): void {
  }

  confirmers = ['Rabindranath', 'Netaji', 'Baghajatin']
  history: string[] = []

  missions = [
    'Make The country independent', 
    'Make the country economically fine',
    'make the country innovative and future ready'
    ];

  nextMission = 0;
  
  announce(){
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" is announced`);
    if(this.nextMission >= this.missions.length){
      this.nextMission = 0
    }
  }
    

}
