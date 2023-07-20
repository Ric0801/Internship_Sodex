import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './pages/player/player.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeamsComponent } from './pages/teams-page/teams.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'team/:id', component: TeamsComponent },
  { path: 'player', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
