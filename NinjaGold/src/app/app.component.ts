import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service'
import { BuildComponentComponent } from './build-component/build-component.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  gold: number;
  place: string;
  recentGold: number;
  log: string[];

  constructor(private _myService: MyServiceService){
    this.gold = 0
    this.log = []
  }

  dataFromChild(eventData){
    this.recentGold = eventData.gold;
    this.place = eventData.place;
    this.gold += eventData.gold;
    let recentLog = "You've earned "+this.recentGold+" gold at the "+this.place
    console.log(recentLog)
    this.log.push(recentLog)
    console.log(this.log)
  }

}
