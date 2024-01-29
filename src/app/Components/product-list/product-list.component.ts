import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IProduct } from '../../DataTypes/product';
import { APIResult } from '../../DataTypes/apiResault';
import { ApiService } from '../../Services/Api.service';
import { WishlistService } from '../../Services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  list:IProduct[] =[]
constructor(private prdAPIServ:ApiService,private wishServ:WishlistService){
  this.prdAPIServ.GetAllProducts()
  .subscribe({
    next:(response)=>{
      console.log(response);
      
      this.list =response.data 
      
  },
  error:(err)=>{
    console.log(err);
    
  }
  })
}
addtowishlist(item:IProduct){
  //
  this.wishServ.add(item).subscribe(recponse=>{
    console.log(recponse);
    
  })
}
}
