import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from './app/interface/TeamInterface';
import { Game } from './app/interface/GameInterface';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    private teamsSubject = new BehaviorSubject<Team[]>([]);
    teams$ = this.teamsSubject.asObservable();

    setTeams(teams: Team[]) {
        console.log("setTeams: " + teams.length)
        this.teamsSubject.next(teams);
    }

    getAllTeams(): Team[] {
        const teams = this.teamsSubject.getValue();
        return teams;
    }

    getTeamById(id: number): Team | undefined {
        const teams = this.teamsSubject.getValue();
        return teams.find(team => team.id === id);
    }
}