import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../app/interface/TeamInterface';
import { Game } from '../app/interface/GameInterface';
import { Player } from '../app/interface/PlayerInterface';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    private teamsSubject = new BehaviorSubject<Team[]>([]);
    private gamesSubject = new BehaviorSubject<Game[]>([]);
    private playerSubject = new BehaviorSubject<Player[]>([]);
    teams$ = this.teamsSubject.asObservable();
    games$ = this.gamesSubject.asObservable();
    players$ = this.playerSubject.asObservable();

    /*
        state Service for Teams
    */

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

    /*
        state Service for Games
    */

    setGames(games: Game[]) {
        console.log("setgames: " + games.length)
        this.gamesSubject.next(games);
    }

    getAllGames(): Game[] {
        const games = this.gamesSubject.getValue();
        return games;
    }

    getGameByTeamId(id: number): Game | undefined {
        const games = this.gamesSubject.getValue();
        return games.find(game => game.teams.home.id === id || game.teams.visitors.id === id);
    }

    getGamesByTeamId(id: number): Game[] | undefined {
        const games = this.gamesSubject.getValue();
        return games.filter(game => game.teams.home.id === id || game.teams.visitors.id === id);
    }

    /*
        state Service for Players
    */

    setPlayer(players: Player[]) {
        console.log("setTeams: " + players.length)
        this.playerSubject.next(players);
    }

    getAllPlayer(): Player[] {
        const players = this.playerSubject.getValue();
        return players;
    }

    getPlayerById(id: number): Player | undefined {
        const players = this.playerSubject.getValue();
        return players.find(player => player.id === id);
    }
}