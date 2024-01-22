import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[	
        AppComponent,
        HomeComponent,
      LoginComponent
   ],
    imports:[
        BrowserModule,
        FormsModule
    ],
    bootstrap:[AppComponent]
})



export class AppModule{

}