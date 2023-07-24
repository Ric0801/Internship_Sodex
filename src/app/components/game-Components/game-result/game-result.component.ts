import { Component } from '@angular/core';
import { StateService } from '../../../../stateService/stateService';
import { FetchService } from '../../../../stateService/FetchService';
import { Team } from 'src/app/interface/TeamInterface';
import { Game } from 'src/app/interface/GameInterface';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent {
  @Input() homeVisitor?: string;

  game: Game[] = []
  team: Team | undefined = undefined

  constructor(private stateService: StateService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    const id = this.route.snapshot.paramMap.get('id');
    const value = Number.parseInt(id ?? "");
    this.team = this.stateService.getTeamById(value);




    /*
        this.gameStart = this.stateService.getGameStart();
        this.gameStart = new Date;
    
        this.gameEnd = this.stateService.getGameEnd();
        this.gameEnd = new Date;
    
        this.gameDuration = this.stateService.getGameDuration();
        this.gameDuration = new Date;
        */
  }
}
