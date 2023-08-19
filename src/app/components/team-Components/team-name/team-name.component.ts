import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../stateService/stateService';
import { FetchService } from '../../../../stateService/FetchService';
import { Team } from '../../../interface/TeamInterface';
import { Input } from '@angular/core';

@Component({
  selector: 'team-name',
  templateUrl: './team-name.component.html',
})
export class TeamNameComponent {
  @Input() name?: string;
  nameOfTeam: Team[] = [];

  constructor(private router: Router, private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    let teams = this.stateService.getAllTeams()
    this.nameOfTeam = teams.filter((team) => team.name)
  }
}
