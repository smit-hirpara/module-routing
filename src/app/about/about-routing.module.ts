import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomarComponent } from './customar/customar.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'customarcompo', pathMatch:'full'},
  {path:'customarcompo', component:CustomarComponent},
  {path:'userscompo', component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
