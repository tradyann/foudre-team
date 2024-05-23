import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  accessToken!: string;
  decoded: any;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const user = localStorage.getItem('accessToken');
    if (user) {
      this.accessToken = 'bearer ' + user;
    }
    req = req.clone({
      setHeaders: {
        Authorization: `${this.accessToken}`
      }
    });
    return next.handle(req);
  }
}
