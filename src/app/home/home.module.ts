import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { 
  constructor() {
    console.warn("HomeModule loaded");
  }
}
