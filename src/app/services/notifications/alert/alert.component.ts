import { Component } from '@angular/core';
import { MdbNotificationRef } from 'mdb-angular-ui-kit/notification';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  title!: string;
  text!: string;
  colorclass!: string;
  constructor(public notificationRef: MdbNotificationRef<AlertComponent>) {}

  close(): void {
    const closeMessage = 'Alert closed';
    this.notificationRef.close(closeMessage);
  }

}
