import { Component } from '@angular/core';
import { Product } from '../../DataTypes/product';
import { ProductListService } from '../../Services/product-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  p:Product[]
  // prdServ:ProductListService;

  constructor(private _prdServ:ProductListService){
    // this.prdServ = _prdServ
    this.p = _prdServ.Products

  }
}
