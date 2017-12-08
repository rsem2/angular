import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-quote-child',
  templateUrl: './quote-child.component.html',
  styleUrls: ['./quote-child.component.css']
})
export class QuoteChildComponent implements OnInit {
  @Input() quote
  
  ngOnInit() {
  }

  constructor() { }

  onSubmit(){
    console.log(this.quote)
    console.log('submitted')
  }

}
