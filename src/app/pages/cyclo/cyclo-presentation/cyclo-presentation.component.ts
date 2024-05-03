import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cyclo-presentation',
  standalone: true,
  imports: [ 
    TranslateModule,
    RouterModule,
  ],
  templateUrl: './cyclo-presentation.component.html',
  styleUrl: './cyclo-presentation.component.scss'
})
export class CycloPresentationComponent {

}
