import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsOverviewComponent } from './components/teams-overview/teams-overview.component';
import { GamesOverview } from './components/game-overview/game-overview.component';
import { PlayerComponent } from './pages/player/player.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeamsComponent } from './pages/teams/teams.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'east', component: TeamsOverviewComponent, data: { conference: "East" }, },
  { path: 'west', component: TeamsOverviewComponent, data: { conference: "West" }, },
  { path: 'team/:id', component: TeamsComponent },
  { path: 'player/:id', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
