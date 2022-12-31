import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteControlsComponent } from './remote-controls/remote-controls.component';
import { TeddyBrarsComponent } from './teddy-brars/teddy-brars.component';

const routes: Routes = [
  {path:'remote-toyscompo', component:RemoteControlsComponent},
  {path:'teddy-brescompo', component:TeddyBrarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToysRoutingModule { }
