import { Team } from "./TeamInterface";

export interface Game {
    id: number,
    live: string,
    date: {
        start: string | Date,
        end: string | Date,
        duration: string
    },
    league: string,
    season: number,
    teams: {
        home: Team,
        visitors: Team,
    },
    h2h: string,
    scores: {
        home: {
            points: number;
        },
        visitors: {
            points: number;
        }
    }
}
