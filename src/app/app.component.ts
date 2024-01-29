import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './DataTypes/product';
import { ProductListService } from './Services/product-list.service';
import { MoneyPipe } from './pipes/money.pipe';
import { LoaderService } from './Services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  

})
export class AppComponent {
  title = 'mearn-app';
  toLoad=false
  constructor(private loaderServ:LoaderService){

this.loaderServ.isLoaded.subscribe(data=>{
  this.toLoad=data
})
  }


}
