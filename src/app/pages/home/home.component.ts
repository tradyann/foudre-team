import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, RouterLink, MdbCarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    {
      "src": "https://www.equipecofidis.com/medias/articles/desktop-cofidis-prolonge-son-engagement-jusqu-en-2028-picture-20240419090745.jpg",
      "title": "Foudre Apero Race",
      "desc": "Find more details about our competition here",
      "alt": "Foudre image desc",
      "btnLink": "http:\\google.com",
      "btnTitle": "read more",
      "btnColor": "btn-primary"
    },
    {
      "src": "https://www.equipecofidis.com/medias/articles/desktop-giro-d-italia-2024-picture-20240430112821.png",
      "title": "Foudre Cyclo",
      "desc": "Find more details about our competition here",
      "alt": "Foudre image desc",
      "btnLink": "http:\\google.com",
      "btnTitle": "read more",
      "btnColor": "btn-primary"
    },
    {
      "src": "https://www.equipecofidis.com/medias/articles/desktop-team-cofidis-les-ardennaises-et-le-doubs-pour-se-relancer-picture-20240412104158.jpg",
      "title": "ZRL events",
      "desc": "Find more details about our competition here",
      "alt": "Foudre image desc",
      "btnLink": "http:\\google.com",
      "btnTitle": "read more",
      "btnColor": "btn-primary"
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
  }



}
