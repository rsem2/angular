import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class MyServiceService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([])
  
  constructor(private _http: HttpClient) {
    
   }

  // getWeather(){
  //   console.log('please work')
  //   let x = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=90d0b79bd6205d862f8457b4d0c44e76')
  //   console.log(x)
  //   console.log(x['main']['temp'])
  // }

  getWeather(location: string) {
    return this._http.get(location)
    .toPromise();
  }
    // return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=90d0b79bd6205d862f8457b4d0c44e76').subscribe(
    //   (task: any[]) => {this.tasks.next(task)}
  // )
    
    // console.log(this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=74a523fa269bb56d7917b3244779515e'))
    // console.log(this._http.get(location))
    // let x = this._http.get(location)
    // console.log(x)
    // console.log(x.map( x => x.json() ))
    // .toPromise();
  
  // this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=74a523fa269bb56d7917b3244779515e').subscribe( (task: any[]) => { this.updateTasl(task);})

}
