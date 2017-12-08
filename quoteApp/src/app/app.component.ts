import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: {
    author: string, 
    content: string,
  }

  constructor(){
    this.quote = {
      author: "",
      content: ""
    }
  }
  // onSubmit(){
  //   console.log(this.quote)
  //   console.log('submitted')
  // }

}
