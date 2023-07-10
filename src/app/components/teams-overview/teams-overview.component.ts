import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../stateService/stateService';
import { FetchService } from '../../../stateService/FetchService';
import { Team } from '../../interface/TeamInterface';
import { Input } from '@angular/core';

@Component({
  selector: 'teams-overview',
  templateUrl: './teams-overview.component.html',
  styleUrls: ['./teams-overview.component.css']
})
export class TeamsOverviewComponent implements OnInit {
  @Input() conference?: string;
  teamsOfConference: Team[] = [];

  /*
  teamsWest: Team[] = [];
  teamsEast: Team[] = [];
  west = 'West Coast';
  east = 'East Coast';
  */

  constructor(private router: Router, private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    let teams = this.stateService.getAllTeams()
    this.teamsOfConference = teams.filter((team) => team.leagues.standard?.conference === this.conference)
    //this.teamsWest = teams.filter((team) => team.leagues.standard?.conference === 'West')
    //this.teamsEast = teams.filter((team) => team.leagues.standard?.conference === 'East')
  }


  navigateToTeam(id: number) {
    this.router.navigate(['/team', id]);
  }

  navigateToTeamsRoster(id: number) {
    this.router.navigate(['/team', id, '/player']);
  }
}