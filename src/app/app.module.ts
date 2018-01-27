import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {NavComponent} from './nav/nav.component';
import {Nav2Component} from './nav2/nav2.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Nav2Component
    ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'nav1', component:NavComponent
      },
      {
        path:'nav2',component:Nav2Component 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
