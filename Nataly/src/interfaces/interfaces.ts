


export interface IUserSelectedMoviesProps {
    movies: any,
    number_of_films: number
    moviesDefault: []

}

export  interface IPreviewMoviesProps {
    handleChangSortParam: any, // с void get error if it is function
    numberFilms: number,
    moviesDefault: [],
    colorActiveSort?: boolean,

}

export  interface IErrorEmptyResultsProps {
    number_of_films: number
}


export interface IPreviewMoviesState {
    moreItem:  boolean
} 

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




