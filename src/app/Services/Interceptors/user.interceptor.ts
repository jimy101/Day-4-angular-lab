import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";


@Injectable()

export class UserInterceptor implements HttpInterceptor {
    constructor(private authServ:AuthService) {
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.headers.set('authorizatoin',`Bearer ${this.authServ.GetFromStorage()?.token}`)

        const authReq = req.clone({headers});
        console.log(authReq)
        return next.handle(authReq)
    }
} 