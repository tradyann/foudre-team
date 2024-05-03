import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-apero-presentation',
  standalone: true,
  imports: [
    //CommonModule,
    TranslateModule,
    RouterModule,
  ],
  templateUrl: './apero-presentation.component.html',
  styleUrl: './apero-presentation.component.scss'
})
export class AperoPresentationComponent {

}
