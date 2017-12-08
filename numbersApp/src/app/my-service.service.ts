import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  addNumber(){
    console.log('hi')

    return(Math.floor(Math.random()*10))
  }

  getData(alpha){
    console.log(alpha)
  }


}
