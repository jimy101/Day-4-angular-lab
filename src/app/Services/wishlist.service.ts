import { Injectable } from '@angular/core';
import { IProduct } from '../DataTypes/product';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../DataTypes/apiResault';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  OriginalPath = "http://localhost:5000"
  constructor(private http: HttpClient) { }
  add(item: IProduct) {
    return this.http.post(this.OriginalPath + "/user/wishlist/add", item)
  }
  getAll() {
    return this.http.get<APIResult<IProduct[]>>(this.OriginalPath + "/user/wishlist")
  }
  remove(id:string){
    return this.http.delete<APIResult<any>>(this.OriginalPath + "/user/wishlist/remove/"+id)

  }
}
