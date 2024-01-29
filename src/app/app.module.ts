import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from './account/Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./Components/footer/footer.component";
import { NavComponent } from "./Components/nav/nav.component";
import { RateComponent } from "./Components/rate/rate.component";
import { CartListService } from "./Services/cart-list.service";
import { MoneyPipe } from "./pipes/money.pipe";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { ProductsComponent } from "./Components/products/products.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./account/Components/register/register.component";
import { AddProductComponent } from "./Components/add-product/add-product.component";
import { EditProductComponent } from "./Components/Edit-Product/Edit-Product.component";
import { AuthInterceptor } from "./Services/Interceptors/auth.interceptor";
import { WishlistComponent } from "./Components/wishlist/wishlist.component";
import { LoaderComponent } from "./Components/loader/loader.component";
import { LoaderInterceptor } from "./Services/Interceptors/loader.Interceptor";
import { UserLayoutComponent } from "./Components/user-layout/user-layout.component";

@NgModule({
    declarations:[	
        AppComponent,
        HomeComponent,
      FooterComponent,
      NavComponent,
      RateComponent,
      ProductsComponent,
      ProductListComponent,
      AddProductComponent,
      EditProductComponent,
      WishlistComponent,
      LoaderComponent,
      UserLayoutComponent
   ],
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        ReactiveFormsModule
    ],
    bootstrap:[AppComponent],
    providers:[
        CartListService,
        {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
        {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}
    ]
})



export class AppModule{

}