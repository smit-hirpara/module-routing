import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToysRoutingModule } from './toys-routing.module';
import { ToysComponent } from './toys.component';
import { RemoteControlsComponent } from './remote-controls/remote-controls.component';
import { TeddyBrarsComponent } from './teddy-brars/teddy-brars.component';


@NgModule({
  declarations: [
    ToysComponent,
    RemoteControlsComponent,
    TeddyBrarsComponent
  ],
  imports: [
    CommonModule,
    ToysRoutingModule
  ]
})
export class ToysModule {
  constructor() {
    console.warn("toys Module loaded");
  }
}
