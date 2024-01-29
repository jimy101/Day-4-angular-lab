// import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, finalize } from 'rxjs';
// import { LoaderService } from '../loader.service';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../loader.service';

// @Injectable()
// export class LoaderInterceptor implements HttpInterceptor {
//   constructor(private loaderServ:LoaderService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     //start ==> show Loader
//     this.loaderServ.show()
//     return next.handle(req).pipe(
//       //end ==> hide Loader
//       finalize(()=>{
//         this.loaderServ.hide()
//       })
//     );
//   }
// }

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loadServ: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadServ.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.loadServ.hide();
      })
    );
  }
}
