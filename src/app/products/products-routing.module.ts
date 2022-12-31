import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './clothes/clothes.component';
import { ToysComponent } from './toys/toys.component';

const routes: Routes = [
  {
    path:'clothes', component: ClothesComponent,
    loadChildren:() => import('../products/clothes/clothes.module').then(m => m.ClothesModule)
  },
  {
    path:'toys', component:ToysComponent,
    loadChildren:() => import('../products/toys/toys.module').then(m => m.ToysModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
