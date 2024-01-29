import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app.routes';

let AdminRoutes:Routes=[
  {path:"",redirectTo:"/admin/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"users",component:UsersComponent},
  {path:"products",component:ProductsComponent},
]


@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
  
        FormsModule,
        RouterModule.forChild(AdminRoutes),
        HttpClientModule,
        ReactiveFormsModule
  ]
})
export class AdminModule { }
