import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service'

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  numbers: number[]
  constructor(private _myService: MyServiceService) {
    this.numbers = []
   }

  ngOnInit() {
  }

  onClick(){
    this.numbers.push(this._myService.addNumber(2))
    console.log(this.numbers)
  }

}
