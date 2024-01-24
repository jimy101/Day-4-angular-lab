import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./Components/footer/footer.component";
import { NavComponent } from "./Components/nav/nav.component";
import { RateComponent } from "./Components/rate/rate.component";
import { CartListService } from "./Services/cart-list.service";
import { MoneyPipe } from "./pipes/money.pipe";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { ProductsComponent } from "./Components/products/products.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./Components/register/register.component";

@NgModule({
    declarations:[	
        AppComponent,
        HomeComponent,
      LoginComponent,
      FooterComponent,
      NavComponent,
      RateComponent,
      ProductsComponent,
      RegisterComponent,
      ProductListComponent
   ],
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    bootstrap:[AppComponent],
    providers:[
        CartListService,
    ]
})



export class AppModule{

}