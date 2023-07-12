import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsOverviewComponent } from './components/team-Components/teams-overview/teams-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GamesOverview } from './components/game-Components/game-overview/game-overview.component';
import { PlayerComponent } from './pages/player/player.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeamsComponent } from './pages/teams-page/teams.component';
import { TeamNameComponent } from './components/team-Components/team-name/team-name.component';
import { TeamLinkComponent } from './components/team-Components/team-link/team-link.component';
import { GameDateComponent } from './components/game-Components/game-date/game-date.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsOverviewComponent,
    NavbarComponent,
    GamesOverview,
    PlayerComponent,
    HomePageComponent,
    TeamsComponent,
    TeamNameComponent,
    TeamLinkComponent,
    GameDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
