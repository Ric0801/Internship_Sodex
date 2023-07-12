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
  dateOfGame: Game[] | undefined = []
  team: Team | undefined = undefined;

  constructor(private stateService: StateService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    const id = this.route.snapshot.paramMap.get('id');
    const value = Number.parseInt(id ?? "");
    this.team = this.stateService.getTeamById(value);
    this.dateOfGame = this.stateService.getGamesByTeamId(value);
  }
}
