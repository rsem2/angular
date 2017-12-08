import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service'

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
  difference: number;
  constructor(private _myService: MyServiceService) {
    
   }

  ngOnInit() {
  }

  onClick(){
    this.difference = this._myService.calcDifference();
  }
}
