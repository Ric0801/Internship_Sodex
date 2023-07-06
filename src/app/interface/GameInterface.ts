import { Team } from "./TeamInterface";

export interface Teams {
    home: Team,
    visitors: Team,
}

export interface DateContainer {
    start: Date,
    end: Date,
    duration: string
}

export interface Game {
    id: number,
    live: string,
    date: DateContainer,
    league: string,
    season: number,
    teams: Teams,
    h2h: string
}
