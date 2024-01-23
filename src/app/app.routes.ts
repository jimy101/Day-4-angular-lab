import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsComponent } from './Components/products/products.component';

export const routes: Routes = [

    {path:"",redirectTo:"home",pathMatch:"full"},

    {path:"home",component: HomeComponent},
    {path:"products",component: ProductsComponent},
    {path:"login",component: LoginComponent},
    {path:"register",component: RegisterComponent},
    {path:"details",component: ProductDetailsComponent},
    {path:"**", redirectTo: "home",pathMatch:"full"}
];
