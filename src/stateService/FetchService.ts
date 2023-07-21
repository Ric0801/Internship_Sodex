import { StateService } from "./stateService";
import { environment } from "../environment";
import { Team } from "../app/interface/TeamInterface";
import { Game } from "../app/interface/GameInterface";
import { Player } from '../app/interface/PlayerInterface';

export class FetchService {
    private static initialized: Boolean = false;
    private static _self: FetchService;

    stateService: StateService;
    teams: Team[] = [];
    games: Game[] = [];
    players: Player[] = [];

    constructor(stateService: StateService) {
        this.stateService = stateService;
    }

    static async initFetchService(stateService: StateService) {
        if (!FetchService.initialized) {
            FetchService._self = new FetchService(stateService)
            await FetchService._self.getTeamsResponse();
            await FetchService._self.getGamesResponse();
        }
        FetchService.initialized = true;
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
            if (response.type === 'cors' || response.ok) {
                const result = await response.json();
                this.teams = result;
                this.stateService.setTeams(this.teams)
            }
        } catch (err) {
            console.error(err);
        }
    }

    async getGamesResponse() {
        try {
            const response = await fetch(environment.restApiServer + "/games", {
                method: 'GET',
                mode: environment.fetchMode as RequestMode,
                headers: {
                    'X-RapidAPI-Key': '395acc3761msh8c7b29a36b5430bp19a90fjsn07e2336b7c27',
                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                },
            });

            console.log("fetch Games successful", response)
            if (response.type === 'cors' || response.ok) {
                const result = await response.json();
                this.games = result;
                this.games = this.games.map((g) => {
                    g.date.start = new Date(g.date.start)
                    g.date.end = new Date(g.date.end)
                    return g
                })

                //console.log("AAAAAAAAAAA", this.games)

                this.stateService.setGames(this.games)
            }
        } catch (err) {
            console.error(err);
        }
    }

    async getPlayerResponse() {
        try {
            const response = await fetch(environment.restApiServer + "/player?team=1&season=2021", {
                method: 'GET',
                mode: environment.fetchMode as RequestMode,
                headers: {
                    'X-RapidAPI-Key': '395acc3761msh8c7b29a36b5430bp19a90fjsn07e2336b7c27',
                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                },
            });

            console.log("fetch Games successful", response)
            if (response.type === 'cors' || response.ok) {
                const result = await response.json();
                this.players = result;
                this.stateService.setPlayer(this.players)
            }
        } catch (err) {
            console.error(err);
        }
    }
}