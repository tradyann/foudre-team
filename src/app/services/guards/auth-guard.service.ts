import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { MdbNotificationRef, MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { ToastComponent } from '../notifications/toast/toast.component';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    notificationRef!: MdbNotificationRef<ToastComponent>;
    decoded: any;
    constructor(
      private notificationService: MdbNotificationService) { }

    canActivate(): Observable<boolean> {
        const user = localStorage.getItem('accessToken');
        if (user) {      
          try {
            this.decoded = jwtDecode(user);
          } catch(Error) {
            this.notificationService.open(ToastComponent, {stacking: true, delay: 5000, autohide: false, data: { title: 'Disconnected!', text: 'Invalid connection token', colorClass: 'toast-danger'} });
            return of(false);
          }
          const expireIn = +this.decoded.exp;
          console.log(this.decoded)
          const currentTimeInSeconds = Math.floor(Date.now() / 1000);
          if (currentTimeInSeconds > expireIn) {
            this.notificationService.open(ToastComponent, {stacking: true, delay: 5000, autohide: false, data: { title: 'Disconnected!', text: 'Please sign in again', colorClass: 'toast-danger'} });
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return of(false);
          }
          return of(true);
        }
        else {
          this.notificationService.open(ToastComponent, {stacking: true, delay: 5000, autohide: false, data: { title: 'Disconnected!', text: 'Invalid connection token', colorClass: 'toast-danger'} });
          return of(false);
        }
    }
}
