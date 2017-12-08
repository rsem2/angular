import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service'

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[]
  constructor(private _myService: MyServiceService) {
    this.numbers = []
   }

  ngOnInit() {
  }

  onClick(){
    this.numbers.push(this._myService.addNumber(1))
    console.log(this.numbers)
  }

}
