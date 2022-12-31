import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothesRoutingModule } from './clothes-routing.module';
import { ClothesComponent } from './clothes.component';
import { TeshirtsComponent } from './teshirts/teshirts.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';


@NgModule({
  declarations: [
    ClothesComponent,
    TeshirtsComponent,
    ShirtsComponent,
    PantsComponent
  ],
  imports: [
    CommonModule,
    ClothesRoutingModule
  ]
})
export class ClothesModule { 
  constructor() {
    console.warn("clothes Module loaded");
  }
}
