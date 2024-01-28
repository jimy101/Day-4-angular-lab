import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../DataTypes/apiResault';
import { IProduct } from '../DataTypes/product';
import { ILoginUser, IRegisterUser } from '../DataTypes/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  OriginalPath = 'http://localhost:5000';

  constructor(private Http: HttpClient) {}

  GetAllProducts() {
    return this.Http.get<APIResult<IProduct[]>>(this.OriginalPath + '/product');
  }
  GetProductByID(id: string) {
    return this.Http.get<APIResult<IProduct>>(
      this.OriginalPath + '/product/' + id
    );
  }
  AddProduct(data: FormData) {
    return this.Http.post<APIResult<any>>(
      this.OriginalPath + '/product/add',
      data
    );
  }
  EditProduct(id: string, data: FormData) {
    return this.Http.put<APIResult<IProduct>>(
      this.OriginalPath + '/product/edit' + id,
      data
    );
  }
  /////////////////////

  Register(User: FormData) {
    return this.Http.post<APIResult<any>>(
      this.OriginalPath + '/user/register',
      User
    );
  }

  Login(User: ILoginUser) {
    return this.Http.post<APIResult<any>>(
      this.OriginalPath + '/user/login',
      User
    );
  }
}
