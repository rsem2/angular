import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  location;
  weather;
  humidity;
  temp;
  tempmax;
  tempmin;
  desc;
  name;

  constructor( private _route: ActivatedRoute, private _service: MyServiceService){
  }

  ngOnInit(){
    this._route.paramMap.subscribe( params => {
      let loc = params.get('location');
      console.log(loc)
      let temp = "https://api.openweathermap.org/data/2.5/weather?q="+loc+"&APPID=74a523fa269bb56d7917b3244779515e"
      console.log(temp)
      // this._service.getWeather()
      this.weather = this._service.getWeather(temp).then( weather => {
        console.log(weather)
        this.humidity = weather.main.humidity;
        this.temp = weather.main.temp - 273;
        this.tempmax = weather.main.temp_max - 273;
        this.tempmin = weather.main.temp_min - 273;
        this.desc = weather.weather[0].description;
        this.name = weather.name;

        console.log(this.desc)
      }
      // console.log(y)
      // this.weather = this._service.getWeather(temp)
      // console.log(this.weather)
      // this.temp = this.weather.main.temp;
      // console.log(this.temp)
 })
  }
  
}
