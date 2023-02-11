import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  //rutas protegidas
  {path:'dashboard', component:PagesComponent},
  {path:'', component:PagesComponent},
  {path:'category', component:CategoryComponent},
  {path:'products', component:PagesComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})
export class PagesRoutingModule { }
