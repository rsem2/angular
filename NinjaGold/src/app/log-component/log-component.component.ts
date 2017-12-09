import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-component',
  templateUrl: './log-component.component.html',
  styleUrls: ['./log-component.component.css']
})
export class LogComponentComponent implements OnInit {

  @Input() myLog;

  constructor() { }

  ngOnInit() {
  }

  

}
