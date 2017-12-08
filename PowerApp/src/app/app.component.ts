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
    console.log(val)
    this.power = val
    console.log(this.power)
  }
}
