import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../stateService/stateService';
import { FetchService } from '../../../../stateService/FetchService';
import { Team } from '../../../interface/TeamInterface';
import { Input } from '@angular/core';
import { TeamLinkComponent } from '../team-link/team-link.component';

@Component({
  selector: 'teams-overview',
  templateUrl: './teams-overview.component.html',
  styleUrls: ['./teams-overview.component.css']
})
export class TeamsOverviewComponent implements OnInit {
  @Input() conference?: string;
  teamsOfConference: Team[] = [];

  constructor(private router: Router, private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    let teams = this.stateService.getAllTeams()
    this.teamsOfConference = teams.filter((team) => team.leagues.standard?.conference === this.conference)
  }


  navigateToTeam(id: any) {
    this.router.navigate(['/team', id]);
  }


  navigateToTeamsRoster(id: number) {
    this.router.navigate(['/team', id, '/player']);
  }
}