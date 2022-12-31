import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { PhnumberComponent } from './phnumber/phnumber.component';
import { EmailComponent } from './email/email.component';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
    PhnumberComponent,
    EmailComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { 
  constructor() {
    console.warn("contact Module loaded");
  }
}
