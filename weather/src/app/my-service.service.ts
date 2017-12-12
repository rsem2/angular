import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class MyServiceService {
  task: BehaviorSubject<any[]> = new BehaviorSubject([])
  constructor(private _http: HttpClient) { }

  this._http.get('http://samples.openweathermap.org/data/2.5/weather?q=seattle&appid=b6907d289e10d714a6e88b30761fae22').subscribe( (task: any[]) => { this.updateTasl(task);})

}
