import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { PhnumberComponent } from './phnumber/phnumber.component';

const routes: Routes = [
  {path:'',redirectTo:'emailcompo',pathMatch:'full'},
  {path:'emailcompo', component:EmailComponent},
  {path:'phnumbercompo', component:PhnumberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
