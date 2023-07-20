import { Component } from '@angular/core';
import { StateService } from '../../../../stateService/stateService';
import { FetchService } from '../../../../stateService/FetchService';

@Component({
  selector: 'game-date',
  templateUrl: './game-date.component.html',
  styleUrls: ['./game-date.component.css']
})
export class GameDateComponent {
  gameStart: any;
  gameEnd: any;
  gameDuration: any;

  constructor(private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);

    this.gameStart = this.stateService.getGameStart();
    this.gameStart = new Date;

    this.gameEnd = this.stateService.getGameEnd();
    this.gameEnd = new Date;

    this.gameDuration = this.stateService.getGameDuration();
    this.gameDuration = new Date;
  }
}
