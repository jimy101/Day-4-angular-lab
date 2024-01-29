import { Injectable } from '@angular/core';
import { IProduct } from '../DataTypes/product';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../DataTypes/apiResault';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  fillSubject: BehaviorSubject<boolean>;
  OriginalPath = 'http://localhost:5000';
  constructor(private http: HttpClient) {
    this.fillSubject = new BehaviorSubject<boolean>(false);
  }
  add(item: IProduct) {
    return this.http.post<APIResult<any>>(
      this.OriginalPath + '/user/wishlist/add',
      item
    );
  }
  getAll() {
    return this.http.get<APIResult<IProduct[]>>(
      this.OriginalPath + '/user/wishlist'
    );
  }
  remove(id: string) {
    return this.http.delete<APIResult<any>>(
      this.OriginalPath + '/user/wishlist/remove/' + id
    );
  }
}
