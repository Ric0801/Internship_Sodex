import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../../stateService';
import { Team } from '../interface/TeamInterface'
import { Game } from '../interface/GameInterface'
import { FetchService } from 'src/FetchService';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  games: Game[] = []
  team: Team | undefined = undefined

  constructor(private route: ActivatedRoute, private http: HttpClient, private stateService: StateService) {
  }


  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    const id = this.route.snapshot.paramMap.get('id');
    const value = Number.parseInt(id ?? "");
    this.team = this.stateService.getTeamById(value);
    console.log("Team init: ", this.team)
  }

  async getTeamsResponse() {
    try {
      const response = await fetch(environment.restApiServer + "/games", {
        method: 'GET',
        mode: environment.fetchMode as RequestMode,
        headers: {
          'X-RapidAPI-Key': '395acc3761msh8c7b29a36b5430bp19a90fjsn07e2336b7c27',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        },
      });

      console.log("fetch teams successful", response)
      if (response.type === 'cors') {
        console.log("cors active")
        const result = await response.json();
        this.games = result;
      } else if (response.ok) {
        const result = await response.json();
        this.games = result.body
      }
    } catch (err) {
      console.error(err);
    }
  }
}