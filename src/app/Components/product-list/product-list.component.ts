import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IProduct } from '../../DataTypes/product';
import { APIResult } from '../../DataTypes/apiResault';
import { ApiService } from '../../Services/Api.service';
import { WishlistService } from '../../Services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  list: IProduct[] = [];
  oldWishlist: IProduct[] = [];
  isAdded: boolean = false;
  constructor(
    private prdAPIServ: ApiService,
    private wishServ: WishlistService
  ) {
    // get user wishlist
    this.wishServ.getAll().subscribe({
      next: (res) => (this.oldWishlist = res.data),
    });
    // get all products
    this.prdAPIServ.GetAllProducts().subscribe({
      next: (response) => {
        console.log(response);

        this.list = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    // loop on lists
  }
  addtowishlist(item: IProduct) {
    //
    this.wishServ.add(item).subscribe((recponse) => {
      console.log(recponse);
      this.oldWishlist = recponse.data;
    });
  }
  //remove
  removefromWish(item: IProduct) {
    this.wishServ.remove(item._id).subscribe((res) => {
      console.log('removed');
      this.oldWishlist = res.data;
    });
  }
  // check
  check(id: string) {
    let newArr = this.oldWishlist.filter((item) => item._id === id);
    if (newArr.length == 0) {
      return (this.isAdded = false);
    } else {
      return (this.isAdded = true);
    }
  }
}
