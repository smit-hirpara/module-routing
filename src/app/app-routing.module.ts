import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'homecompo', component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'aboutcompo', component:AboutComponent,
    loadChildren:() => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path:'contactcompo', component: ContactComponent,
    loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'productscompo', component: ProductsComponent,
    loadChildren:() => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
