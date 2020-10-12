import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GodasparentComponent } from './componentInteractions/inputbinding/godasparent/godasparent.component';
import { PlayersaschildrenComponent } from './componentInteractions/inputbinding/playersaschildren/playersaschildren.component';
import { AllnamesparentComponent } from './componentinteractions/withsetter/allnamesparent/allnamesparent.component';
import { ValidnameschildComponent } from './componentinteractions/withsetter/validnameschild/validnameschild.component';
import { InteractorparentComponent } from './componentInteractions/ngonchanges/interactorparent/interactorparent.component';
import { CounterchildComponent } from './componentInteractions/ngonchanges/counterchild/counterchild.component';
import { VoteaggregatorComponent } from './componentInteractions/childevents/voteaggregator/voteaggregator.component';
import { VoteboxchildComponent } from './componentInteractions/childevents/voteboxchild/voteboxchild.component';
import { DeercounterchildComponent } from './componentInteractions/localvariable/deercounterchild/deercounterchild.component';
import { TigerparentComponent } from './componentInteractions/localvariable/tigerparent/tigerparent.component';
import { MousecounterComponent } from './componentInteractions/viewchild/mousecounter/mousecounter.component';
import { CatasparentComponent } from './componentInteractions/viewchild/catasparent/catasparent.component';
import { MissioncontrollerComponent } from './componentInteractions/usingservice/missioncontroller/missioncontroller.component';
import { MissionboardComponent } from './componentInteractions/usingservice/missionboard/missionboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GodasparentComponent,
    PlayersaschildrenComponent,
    AllnamesparentComponent,
    ValidnameschildComponent,
    InteractorparentComponent,
    CounterchildComponent,
    VoteaggregatorComponent,
    VoteboxchildComponent,
    DeercounterchildComponent,
    TigerparentComponent,
    MousecounterComponent,
    CatasparentComponent,
    MissioncontrollerComponent,
    MissionboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
