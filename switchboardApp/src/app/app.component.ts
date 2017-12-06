import { Component } from '@angular/core';

function makeArray(){
  var myArray = []
  for(var i = 0; i<8; i++){
    myArray[i] = false;
  }
  return myArray
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  myArray: boolean[]

  constructor(){
    this.title = 'Switchboard';
    this.myArray = makeArray();
  }
  
  onButtonClick = function(i){
    this.myArray[i] = !this.myArray[i]
    console.log(this.myArray)
  }
}
