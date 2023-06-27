import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.getTeamsResponse()
  }

  async getTeamsResponse() {
    try {
      const response = await fetch("https://api-nba-v1.p.rapidapi.com/teams", {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '395acc3761msh8c7b29a36b5430bp19a90fjsn07e2336b7c27',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      });

      if (response.ok) {
        const result = await response.json();
        this.teams = result.response
      }
    } catch (err) {
      console.error(err);
    }
  }
}