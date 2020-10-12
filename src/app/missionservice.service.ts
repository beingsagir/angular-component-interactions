import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionserviceService {

  constructor() { }

  private missionAnnounced = new Subject<string>()
  private missionConfirmed = new Subject<string>()

  missionAnnouncedObservable = this.missionAnnounced.asObservable()
  missionConfirmedObservable = this.missionConfirmed.asObservable()


  announceMission(mission: string){
    this.missionAnnounced.next(mission)
  }


  confirmMission(confirmer: string){
    this.missionConfirmed.next(confirmer)
  }

}
