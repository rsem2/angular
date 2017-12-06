import { Component } from '@angular/core';

function getRandomColor(){
  var letters:string = '0123456789ABCDEF';
  var color:string = '#';
  for(let i=0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)]
  }
  return color
}

function getArrayColors(){
  var myArr: string[] = [];
  for(let j=0; j<10; j++){
    myArr.push(getRandomColor())
  }
  return myArr
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = getArrayColors();
}
