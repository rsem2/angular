import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number[] = [1,2,3]
  constructor() { }

  retrieveNumbers(){
    return this.numbers;
  }

  addNumber(val: number){
    this.numbers.push(val);
  }

}
