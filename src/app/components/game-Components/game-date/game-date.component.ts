import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../../stateService/stateService';
import { FetchService } from '../../../../stateService/FetchService';
import { Input } from '@angular/core';
import { Game } from 'src/app/interface/GameInterface';
import { Team } from 'src/app/interface/TeamInterface';

@Component({
  selector: 'game-date',
  templateUrl: './game-date.component.html',
  styleUrls: ['./game-date.component.css']
})
export class GameDateComponent {
  @Input() date?: Date;
  gameByTeamId: Game[] | undefined = []
  team: Team | undefined = undefined;
  gameStart: any;
  gameEnd: any;
  gameDuration: any;

  constructor(private stateService: StateService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    const id = this.route.snapshot.paramMap.get('id');
    const value = Number.parseInt(id ?? "");
    this.team = this.stateService.getTeamById(value);
    this.gameByTeamId = this.stateService.getGamesByTeamId(value);

    this.gameStart = this.stateService.getGameStart();
    this.gameStart = new Date;

    this.gameEnd = this.stateService.getGameEnd();
    this.gameEnd = new Date;

    this.gameDuration = this.stateService.getGameDuration();
    this.gameDuration = new Date;
  }
}
