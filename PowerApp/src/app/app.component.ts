import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  power

  constructor(){
    this.power = {value: ''};
  }
  onSubmit(){
    console.log(this.power)
  }
}
