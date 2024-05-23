import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdbNotificationRef } from 'mdb-angular-ui-kit/notification';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  title!: string;
  text!: string;
  colorClass!: string;
  constructor(public notificationRef: MdbNotificationRef<ToastComponent>) {}

  close(): void {
    const closeMessage = 'Toast closed';
    this.notificationRef.close(closeMessage);
  }
}
