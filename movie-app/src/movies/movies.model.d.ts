export interface MovieDTO {
    id:number;
    title:string;
    poster:string;
}

export interface landingPageDTO{
    inTheaters?: MovieDTO[];
    upcomingReleases?: MovieDTO[];
    
}