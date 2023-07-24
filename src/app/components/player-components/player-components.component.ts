import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from './../../../stateService/stateService';
import { FetchService } from './../../../stateService/FetchService';
import { Input } from '@angular/core';
import { Player } from 'src/app/interface/PlayerInterface';
import { Team } from 'src/app/interface/TeamInterface';

@Component({
  selector: 'player-components',
  templateUrl: './player-components.component.html',
  styleUrls: ['./player-components.component.css']
})
export class PlayerComponentsComponent {
  @Input() conference?: string;
  playerOfTeam: Player[] | undefined = [];
  teamByID: Team | undefined = undefined;


  constructor(private router: Router, private stateService: StateService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    const id = this.route.snapshot.paramMap.get('id');
    const value = Number.parseInt(id ?? "");
    this.teamByID = this.stateService.getTeamById(value);
    this.playerOfTeam = this.stateService.getAllPlayer();
  }
}
