import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CustomarComponent } from './customar/customar.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    CustomarComponent,
    UsersComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule {
  constructor() {
    console.warn("AboutModule loaded");
  }
}
