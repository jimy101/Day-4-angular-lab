import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/Edit-Product/Edit-Product.component';

export const routes: Routes = [

    {path:"",redirectTo:"home",pathMatch:"full"},

    {path:"home",component: HomeComponent},
    {path:"local-product",component: ProductsComponent},
    {path:"products",component: ProductListComponent},
    {path:"add-product",component: AddProductComponent},
    {path:"login",component: LoginComponent},
    {path:"register",component: RegisterComponent},
    {path:"details/:id",component: ProductDetailsComponent},
    {path:"edit-product/:id",component: EditProductComponent},
    {path:"**", redirectTo: "home",pathMatch:"full"}
];
