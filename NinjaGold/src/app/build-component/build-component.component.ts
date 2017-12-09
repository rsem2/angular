import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from './../my-service.service';

@Component({
  selector: 'app-build-component',
  templateUrl: './build-component.component.html',
  styleUrls: ['./build-component.component.css']
})
export class BuildComponentComponent implements OnInit {

  @Output() aTaskEventEmitter = new EventEmitter();

  constructor(private _myService: MyServiceService) {

   }

  ngOnInit() {
  }

  onClick(x:number,y:number,place:string){
    let temp = this._myService.makeGold(x,y)
    this.aTaskEventEmitter.emit({gold: temp, place: place});
  }

}
