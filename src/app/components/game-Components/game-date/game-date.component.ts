import { Component } from '@angular/core';
import { StateService } from '../../../../stateService/stateService';
import { FetchService } from '../../../../stateService/FetchService';
import { formatDistance, format } from 'date-fns'

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

    let start = this.stateService.getGameStart();
    this.gameStart = start.filter((game) => game.date.start);

    this.gameEnd = this.stateService.getGameEnd();
    format(new Date(this.gameEnd), 'MM/dd/yyyy')
    console.log(this.gameEnd)

    this.gameDuration = this.stateService.getGameDuration();
    this.gameDuration = new Date;
  }
}
