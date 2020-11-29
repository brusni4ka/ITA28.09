import IMovie from "../../interfaces/IMovie"


export enum MoviesTypes {
    LoadData = "LoadData",
    ReceivedData = "ReceivedData",
    Error = "Error",
    CurrentMovieLoad = "CurrentMovieLoad",
    CurrentMovieReceived = "CurrentMovieReceived",
    CurrentMovieError = "CurrentMovieError"
}

export interface ILoadData {
    type: MoviesTypes,
    movies: IMovie[],
    status: string,
    sortBy?: string,
    searchBy?: string,
    search?: string
}

export const LoadData = (status: string, sortBy?: string, searchBy?: string, search?: string):ILoadData => ({
    type: MoviesTypes.LoadData,
    movies: [],
    status,
    sortBy,
    searchBy,
    search
})

export interface IReceivedData {
    type: MoviesTypes,
    status: string,
    movies: IMovie[]
}

export const ReceivedData = (status: string, movies: IMovie[]):IReceivedData => ({
    type: MoviesTypes.ReceivedData,
    status: status,
    movies: movies
})

export interface IError {
    type: MoviesTypes,
    movies: IMovie[],
    status: string
}

export const Error = (status: string):IError => ({
    type: MoviesTypes.Error,
    movies: [],
    status: status
})

export type IMoviesAction = ILoadData | IReceivedData | IError