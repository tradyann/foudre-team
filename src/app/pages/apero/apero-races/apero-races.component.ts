import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'src/app/shared/ng2-filter/ng2-filter.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apero-races',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MdbSelectModule,
    NgPipesModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  templateUrl: './apero-races.component.html',
  styleUrl: './apero-races.component.scss'
})
export class AperoRacesComponent {
  jsonData: any = {};
  categories: string[] = ['A', 'B', 'C', 'D'];
  options = [
    { value: '', label: 'All' },
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
  ];
  myCatFilter: any[] = [];
  myFilter: any[] = [];
  searchString!: string;
  catSearch!: string;

  races = [
    { id: 4352185, name:'27 april 2024', start: '21:15', description: 'Scratch Race - iTT', route: 'Champs-Élysées', distance: '10km' },
    { id: 4311465, name:'2 may 2024', start: '21:10', description: 'Stage 5: Lap It Up - London Classique', route: 'London Classique', distance: '17km' },
  ];
  selectedRaceId: number = this.races[0].id;
  selectedRace: any = this.races[0];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchJsonData();
    this.myCatFilter = ['category'];
    this.myFilter = ['name', 'tname', 'age'];
  }

  fetchJsonData() {
    const url = `assets/apero/${this.selectedRace.id}.json`;
    this.http.get<any>(url).subscribe(data => {
      this.jsonData = data;
    });
  }

  onRaceChange(newRaceId: number) {
    this.selectedRaceId = newRaceId;
    this.selectedRace = this.races.find(race => race.id === newRaceId) || this.races[0];
    this.fetchJsonData();
  }

  getTimeFormatted(seconds: number): string {
    // Convert seconds to milliseconds
    const milliseconds = seconds * 1000;
    // Create a new Date object
    const date = new Date(milliseconds);
    // Get hours, minutes, and seconds from the Date object
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const secondsRemaining = date.getUTCSeconds();
  
    // Check if the time is less than 60 minutes
    if (hours === 0 && minutes < 60) {
      // If yes, format the time as MM:SS
      return `${this.pad(minutes)}:${this.pad(secondsRemaining)}`;
    } else {
      // Otherwise, format the time as HH:MM:SS
      return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secondsRemaining)}`;
    }
  }
  
  pad(value: number): string {
    return value < 10 ? '0' + value : '' + value;
  }
}