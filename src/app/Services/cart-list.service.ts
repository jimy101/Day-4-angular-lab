import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartListService {
  CartSubject: BehaviorSubject<any[]>


  constructor() {
    //to do
    this.CartSubject = new BehaviorSubject<any[]>(this.GetFromStorage())
  }
  GetFromStorage(): any[] {
   let str = localStorage.getItem("cart")
   if (str== null|| str=="") {
    return [];
   } else {
    return JSON.parse(str) as any[]
   } 
  }
  SetToStorage(data: any[]) {
    localStorage.setItem("cart", JSON.stringify(data))
  }
  addToCart(id: any) {
    let oldData = this.CartSubject.value
    
    oldData.push(id)
    this.SetToStorage(oldData)
    this.CartSubject.next(oldData)
  }
}
