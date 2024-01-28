import { Component } from '@angular/core';
import { ProductListService } from '../../Services/product-list.service';
import { CartListService } from '../../Services/cart-list.service';
import { IStoredUser } from '../../DataTypes/user';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
clientName:string = ""
count=0
cart=0
LoggedUser:IStoredUser|null = null
constructor (
  private ProdServ:ProductListService,
  private authServ:AuthService,
  private cartServ:CartListService){
  this.count = this.ProdServ.Products.length
 let obj =  this.cartServ.CartSubject.subscribe((value)=>{
    console.log(value);
    this.cart = value.length
    
  })
  this.authServ.UserSubject.subscribe(data=>{
    this.LoggedUser = data
  })

  
}
logOut(){
  this.authServ.UserLoggedOut()
}



}



