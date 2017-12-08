import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppComponentComponent } from './app-component/app-component.component';
import { HeaderComponentComponent } from './app-component/header-component/header-component.component';
import { NavComponentComponent } from './app-component/nav-component/nav-component.component';
import { MainComponentComponent } from './app-component/main-component/main-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComponentComponent,
    HeaderComponentComponent,
    NavComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
