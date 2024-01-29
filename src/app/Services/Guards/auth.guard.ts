// import { CanActivateFn } from '@angular/router';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";

// export const authGuard: CanActivateFn = (route, state) => {
//   return false;
// };
@Injectable({
  providedIn:"root"
})
export class authGuard implements CanActivate {
  constructor(private authServ: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    // console.log("route",route);
    // console.log("state",state);
    
    if (this.authServ.GetFromStorage() == null) {
      alert("Sorry you Must Join Us frist :)")
      this.router.navigate(["/login",state.url])
      return false;
    }
    else{
      return true;
    }


  }

}