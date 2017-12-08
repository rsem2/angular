import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  power: number

  constructor(){
  }
  
  onSubmit(val: number){
    this.power = val
  }
}
