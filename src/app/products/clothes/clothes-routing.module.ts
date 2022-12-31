import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantsComponent } from './pants/pants.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { TeshirtsComponent } from './teshirts/teshirts.component';

const routes: Routes = [
  {path:'teshirtscompo',component:TeshirtsComponent},
  {path:'shirtscompo',component:ShirtsComponent},
  {path:'paths',component:PantsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothesRoutingModule { }
