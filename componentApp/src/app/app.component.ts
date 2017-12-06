import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  date: number
  format: string
  location: string
  switch: boolean
  selected: string

  constructor(){
    this.title = 'US Time Zone Display';
    this.date = Date.now();
    this.format = 'yyyy-MM-dd, h:mm:ss a'
    this.location = 'PST'
    this.switch = false
    this.selected = null;
  }
  
  onButtonClick(place) { 
    this.location = place
    this.selected = place
    this.switch = true

  }
}
