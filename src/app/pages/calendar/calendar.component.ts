import { Component } from '@angular/core';
import { MdbCalendarEvent, MdbCalendarModule, endOfDay, startOfDay } from 'mdb-angular-calendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MdbCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  events: MdbCalendarEvent[] = [
    {
      id: 'event1',
      summary: 'JS Conference',
      startDate: startOfDay(new Date()),
      endDate: endOfDay(new Date()),
      color: {
        background: '#cfe0fc',
        foreground: '#0a47a9',
      },
    },
    { id: 'event2',
      summary: 'Vue Meetup',
      startDate: startOfDay(new Date(new Date().setDate(new Date().getDate() + 1))),
      endDate: endOfDay(new Date(new Date().setDate(new Date().getDate() + 5))),
      color: {
        background: '#ebcdfe',
        foreground: '#6e02b1',
      },
    },
    {
      id: 'event3',
      summary: 'Angular Meetup',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      startDate: new Date(new Date(new Date().setDate(new Date().getDate() - 3)).setHours(10,0,0,0)),
      endDate: new Date(new Date(new Date().setDate(new Date().getDate() + 3)).setHours(14,0,0,0)),
      color: {
        background: '#c7f5d9',
        foreground: '#0b4121',
      },
    },
    {
      id: 'event4',
      summary: 'React Meetup',
      startDate: startOfDay(new Date(new Date().setDate(new Date().getDate() + 5))),
      endDate: endOfDay(new Date(new Date().setDate(new Date().getDate() + 8))),
      color: {
        background: '#fdd8de',
        foreground: '#790619',
      },
    },
    {
      id: 'event5',
      summary: 'Meeting',
      startDate: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(8,0,0,0)),
      endDate: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(12,0,0,0)),
      color: {
        background: '#cfe0fc',
        foreground: '#0a47a9',
      },
    },
    {
      id: 'event6',
      summary: 'Call',
      startDate: new Date(new Date(new Date().setDate(new Date().getDate() + 2)).setHours(11,0,0,0)),
      endDate: new Date(new Date(new Date().setDate(new Date().getDate() + 2)).setHours(14,0,0,0)),
      color: {
        background: '#292929',
        foreground: '#f5f5f5',
      },
    }
  ];
}
