
export interface IMoviesDefault {
    title: string,
    poster_path: string,
    id: number,
    genres: [],
    release_date: string,
    budget: number, 
    overview: string,
    revenue: number
    runtime: number
    tagline: string
    vote_average: number
    vote_count: number
    rating: number,
    linkUrl: string
}

export interface ICardMovie  {
    key?: number,
    genres: []
    release_date: string
    title: string,
    id?: number, 
    poster_path: string,
    overview?: string,
    total?:	number,
    offset?: number,
    limit?:	number,
    linkUrl?: string

}




