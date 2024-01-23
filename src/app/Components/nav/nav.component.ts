import { Component } from '@angular/core';
import { ProductListService } from '../../Services/product-list.service';
import { CartListService } from '../../Services/cart-list.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
clientName:string = ""
count=0
cart=0
constructor (private ProdServ:ProductListService,private cartServ:CartListService){
  this.count = this.ProdServ.Products.length
  this.cart = this.cartServ.UserCart.length

}



}



