import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsOverviewComponent } from './components/teams-overview/teams-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GamesOverview } from './components/game-overview/game-overview.component';
import { PlayerComponent } from './pages/player/player.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeamsComponent } from './pages/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsOverviewComponent,
    NavbarComponent,
    GamesOverview,
    PlayerComponent,
    HomePageComponent,
    TeamsComponent,
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
