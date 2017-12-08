import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-human-component',
  templateUrl: './human-component.component.html',
  styleUrls: ['./human-component.component.css']
})
export class HumanComponentComponent implements OnInit, OnChanges {
  @Input() power;
  
  ngOnInit() {
  }

  constructor(){
    
  }

  ngOnChanges(){
    this.power = this.power*10
    console.log(this.power)
  }

}
