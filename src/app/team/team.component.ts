import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment';

interface Games {
  id: number,
  live: string,
  date: Date,
  league: string,
  season: number,
  team: number,
  h2h: string
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  games: Games[] = []

  ngOnInit(): void {
    this.getTeamsResponse()
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