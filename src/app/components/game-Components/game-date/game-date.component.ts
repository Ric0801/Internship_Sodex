import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../../stateService/stateService';
import { FetchService } from '../../../../stateService/FetchService';
import { formatDistance, format } from 'date-fns'
import { Game } from 'src/app/interface/GameInterface';
import { Team } from 'src/app/interface/TeamInterface';


@Component({
  selector: 'game-date',
  templateUrl: './game-date.component.html',
})
export class GameDateComponent {
  games: Game[] | undefined = []
  team: Team | undefined = undefined
  gameStart: any;
  gameEnd: any;
  gameDuration: any;

  constructor(private route: ActivatedRoute, private router: Router, private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    const id = this.route.snapshot.paramMap.get('id');
    const value = Number.parseInt(id ?? "");
    
    this.team = this.stateService.getTeamById(value);
    this.games = this.stateService.getGamesByDate(value);

    this.gameStart = this.games?.filter((date) => date.date.start)
    this.gameEnd = this.games?.filter((date) => date.date.end)
    this.gameDuration = this.games?.filter((date) => date.date.duration)
    console.log("game start:",this.gameStart.date)
  }
}
