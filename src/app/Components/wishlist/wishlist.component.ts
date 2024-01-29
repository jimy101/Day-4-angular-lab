import { Component } from '@angular/core';
import { IProduct } from '../../DataTypes/product';
import { WishlistService } from '../../Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  list:IProduct[]=[]
  constructor(private wishServ:WishlistService){
    this.get()
  }

  get(){
    this.wishServ.getAll().subscribe(res=>{
      this.list = res.data
    })
  }
  RemoveFromwishlist(item:IProduct){
    this.wishServ.remove(item._id).subscribe(res=>{
      // alert(res.message)
      // console.log(res);
      this.get()
      // this.list = res.data as IProduct[]
      
    })
  }
}
