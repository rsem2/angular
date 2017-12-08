import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildComponentComponent } from './build-component/build-component.component';
import { LogComponentComponent } from './log-component/log-component.component';

import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    BuildComponentComponent,
    LogComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MyServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
