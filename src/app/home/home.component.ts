import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../stateService/stateService';
import { FetchService } from '../../stateService/FetchService';
import { Team } from '../interface/TeamInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teamsWest: Team[] = [];
  teamsEast: Team[] = [];

  constructor(private router: Router, private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    let teams = this.stateService.getAllTeams()
    this.teamsWest = teams.filter((team) => team.leagues.standard?.conference === 'West')
    this.teamsEast = teams.filter((team) => team.leagues.standard?.conference === 'East')
  }


  navigateToTeam(id: number) {
    this.router.navigate(['/team', id]);
  }

  navigateToTeamsRoster(id: number) {
    this.router.navigate(['/team', id, '/player']);
  }
}