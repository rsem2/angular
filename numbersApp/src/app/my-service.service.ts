import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {
  alphaNumbers: number[]
  betaNumbers: number[]
  difference: number
  
  constructor() { 
    this.alphaNumbers = [];
    this.betaNumbers = [];
  }

  addNumber(x: number){
    let temp = Math.floor(Math.random()*10)
    if(x == 1){
      this.alphaNumbers.push(temp)
    }
    else{
      this.betaNumbers.push(temp)
    }
    return(temp)
  }

  calcDifference(){
    let sum1 = 0
    let sum2 = 0
    if(this.alphaNumbers.length>0){
      for(let i =0; i< this.alphaNumbers.length; i++){
        sum1 += this.alphaNumbers[i];
      }
    }
    if(this.betaNumbers.length>0){
      for(let i =0; i< this.betaNumbers.length; i++){
        sum2 += this.betaNumbers[i];
      }
    }
    this.difference = sum1-sum2;
    return this.difference;
  }
}
