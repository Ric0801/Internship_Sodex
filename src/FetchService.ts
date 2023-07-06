import { StateService } from "./stateService";
import { environment } from "./environment";
import { Team } from "./app/interface/TeamInterface";
import { Game } from "./app/interface/GameInterface";

export class FetchService {
    private static initialized: Boolean = false;
    private static _self: FetchService;

    stateService: StateService;
    teams: Team[] = [];


    constructor(stateService: StateService) {
        this.stateService = stateService;
    }


    static async initFetchService(stateService: StateService) {
        if (!FetchService.initialized) {
            FetchService._self = new FetchService(stateService)
            await FetchService._self.getTeamsResponse();
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
}