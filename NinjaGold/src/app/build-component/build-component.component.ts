import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';

@Component({
  selector: 'app-build-component',
  templateUrl: './build-component.component.html',
  styleUrls: ['./build-component.component.css']
})
export class BuildComponentComponent implements OnInit {

  constructor(private _myService: MyServiceService) {

   }

  ngOnInit() {
  }

  onClick(x:number,y:number){
    console.log(Math.floor((Math.random() * (x-y))+y))
    this._myService.makeGold(Math.floor((Math.random() * (x-y))+y))
  }

}
