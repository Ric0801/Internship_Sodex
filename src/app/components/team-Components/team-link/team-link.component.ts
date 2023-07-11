import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../stateService/stateService';
import { FetchService } from '../../../../stateService/FetchService';
import { Team } from '../../../interface/TeamInterface';
import { Input } from '@angular/core';

@Component({
  selector: 'team-link',
  templateUrl: './team-link.component.html',
  styleUrls: ['./team-link.component.css']
})
export class TeamLinkComponent {
  @Input() _id?: number;
  teamID: Team[] = [];

  constructor(private router: Router, private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    let teams = this.stateService.getAllTeams()
    this.teamID = teams.filter((team) => team.id === this._id);
  }

  navigateToTeam(id: any) {
    this.router.navigate(['/team', id]);
  }
}
