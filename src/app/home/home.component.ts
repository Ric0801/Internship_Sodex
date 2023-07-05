import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment';

interface Team {
  allStar: boolean,
  city: string,
  code: string,
  id: number,
  leagues: any,
  logo: string,
  name: string,
  nbaFranchise: boolean,
  nickname: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teams: Team[] = [];
  teamsWest: Team[] = [];
  teamsEast: Team[] = [];

  ngOnInit(): void {
    this.getTeamsResponse()
  }

  async getTeamsResponse() {
    try {
      const response = await fetch(environment.restApiServer + "/teams", {
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
        this.teams = result;
      } else if (response.ok) {
        const result = await response.json();
        this.teams = result.body
      }
    } catch (err) {
      console.error(err);
    }

    this.teamsWest = this.teams.filter((team) => team.leagues.standard?.conference === 'West')
    this.teamsEast = this.teams.filter((team) => team.leagues.standard?.conference === 'East')
  }
}