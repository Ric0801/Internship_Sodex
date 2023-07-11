import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../../stateService/stateService';
import { Team } from '../../../interface/TeamInterface'
import { Game } from '../../../interface/GameInterface'
import { FetchService } from 'src/stateService/FetchService';

@Component({
  selector: 'game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.css']
})
export class GamesOverview {
  games: Game[] | undefined = []
  team: Team | undefined = undefined

  constructor(private route: ActivatedRoute, private router: Router, private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    const id = this.route.snapshot.paramMap.get('id');
    const value = Number.parseInt(id ?? "");
    this.team = this.stateService.getTeamById(value);
    this.games = this.stateService.getGamesByTeamId(value);
    console.log("Team init: ", this.team)
    console.log("Games init: ", this.games)


  }

  navigateToPlayers(id: number) {
    this.router.navigate(['/player', id]);
  }
}