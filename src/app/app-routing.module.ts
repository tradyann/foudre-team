import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './shell/layouts/main-layout/main-layout.component';
import { AperoPresentationComponent } from './pages/apero/apero-presentation/apero-presentation.component';
import { AperoRacesComponent } from './pages/apero/apero-races/apero-races.component';
import { CycloPresentationComponent } from './pages/cyclo/cyclo-presentation/cyclo-presentation.component';
import { HomeLayoutComponent } from './shell/layouts/home-layout/home-layout.component';
import { HomeEventsComponent } from './pages/manager/home-events/home-events.component';

const routes: Routes = [
  {
    path : '' , 
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  },
  {
    path : '' , 
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'apero', component: AperoPresentationComponent },
      { path: 'apero/races', component: AperoRacesComponent },
      { path: 'cyclo', component: CycloPresentationComponent },
      { path: 'manager/home-events', component: HomeEventsComponent },
      { path: 'not-found', component: FourOhFourComponent },
    ]
  },
  //{ path: 'heroes', component: HeroesComponent }
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {  preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
