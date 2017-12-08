import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-quote-child',
  templateUrl: './quote-child.component.html',
  styleUrls: ['./quote-child.component.css']
})
export class QuoteChildComponent implements OnInit, OnChanges {
  @Input() quote
  
  ngOnInit() {
  }

  constructor() { }

  ngOnChanges(){
    this.quote = this.quote
    console.log("child",this.quote)
  }

}
