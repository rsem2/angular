import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {
  gold: number

  constructor() { 
    this.gold = 0;
  }

  makeGold(x:number, y:number){
    return Math.floor((Math.random() * (x-y))+y)
  }

}
