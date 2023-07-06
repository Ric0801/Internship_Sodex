import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../stateService';
import { FetchService } from '../../FetchService';

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
  teamsWest: Team[] = [];
  teamsEast: Team[] = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private stateService: StateService) {
  }

  async ngOnInit() {
    await FetchService.initFetchService(this.stateService);
    let teams = this.stateService.getAllTeams()
    this.teamsWest = teams.filter((team) => team.leagues.standard?.conference === 'West')
    this.teamsEast = teams.filter((team) => team.leagues.standard?.conference === 'East')
  }


  navigateToTeam(id: number) {
    this.router.navigate(['/team', id]);
  }
}