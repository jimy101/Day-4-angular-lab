import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IStoredUser } from '../DataTypes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserSubject: BehaviorSubject<IStoredUser|null>


  constructor() {
    this.UserSubject = new BehaviorSubject<IStoredUser|null>(this.GetFromStorage())
  }
  GetFromStorage(): IStoredUser|null {
   let str = localStorage.getItem("user")
   if (str== null|| str=="") {
    return null;
   } else {
    return JSON.parse(str) as IStoredUser
   } 
  }
  SetToStorage(data: IStoredUser) {
    localStorage.setItem("user", JSON.stringify(data))
  }
  newUserLoggedIn(data:IStoredUser) {
    this.SetToStorage(data)
    this.UserSubject.next(data)
  }
  UserLoggedOut() {
    localStorage.removeItem("user",)
    this.UserSubject.next(null)
  }

}
