export interface Player {
    id: number;
    firstname: string;
    birth:
    {
        date: string;
        country: string;
    }
    height:
    {
        meter: string
    }
    weight:
    {
        kilograms: string;
    }
    college: string;
    affiliation: string;
    leagues:
    {
        standart:
        {
            jersey: number;
            pos: string
        }
    }
}