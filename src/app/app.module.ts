import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from './Components/login/login.component';

@NgModule({
    declarations:[	
        AppComponent,
        HomeComponent,
      LoginComponent
   ],
    imports:[
        BrowserModule
    ],
    bootstrap:[AppComponent]
})



export class AppModule{

}