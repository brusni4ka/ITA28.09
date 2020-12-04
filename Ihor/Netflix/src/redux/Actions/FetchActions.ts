import { FetchActionsTypes } from "../Reducers/FetchReducer";
import IMovie from "../../Interfaces/IMovie";

export interface IMoviesRequested {
  type: FetchActionsTypes.MOVIES_REQUESTED;
  sortBy: string;
  offset: number;
  searchBy?: string;
  search?: string;
  isLazy?: boolean;
}

export const moviesRequested = (
  sortBy: string,
  offset: number,
  searchBy?: string,
  search?: string
): IMoviesRequested => ({
  type: FetchActionsTypes.MOVIES_REQUESTED,
  sortBy,
  offset,
  searchBy,
  search,
});

export interface IMoviesRecieved {
  type: FetchActionsTypes.MOVIES_RECIEVED;
  payload: IMovie[];
}

export const moviesRecieved = (movies: IMovie[]): IMoviesRecieved => ({
  type: FetchActionsTypes.MOVIES_RECIEVED,
  payload: movies,
});

export interface IMoviesFailed {
  type: FetchActionsTypes.MOVIES_FAILED;
}

export const moviesFailed = (): IMoviesFailed => ({
  type: FetchActionsTypes.MOVIES_FAILED,
});

export interface ISelectedMovieRequested {
  type: FetchActionsTypes.SELECTED_MOVIE_REQUESTED;
  payload: string;
}

export const selectedMovieRequested = (
  id: string
): ISelectedMovieRequested => ({
  type: FetchActionsTypes.SELECTED_MOVIE_REQUESTED,
  payload: id,
});

export interface ISelectedMovieRecieved {
  type: FetchActionsTypes.SELECTED_MOVIE_RECIEVED;
  payload: IMovie;
}

export const selectedMovieRecieved = (
  movie: IMovie
): ISelectedMovieRecieved => ({
  type: FetchActionsTypes.SELECTED_MOVIE_RECIEVED,
  payload: movie,
});

export interface ISelectedMovieFailed {
  type: FetchActionsTypes.SELECTED_MOVIE_FAILED;
}

export const selectedMovieFailed = (): ISelectedMovieFailed => ({
  type: FetchActionsTypes.SELECTED_MOVIE_FAILED,
});

export interface ILoadData {
  type: FetchActionsTypes.LOAD_DATA;
  offset: number;
  sortBy?: string;
  searchBy?: string;
  search?: string;
}

export const loadData = (
  offset: number,
  sortBy?: string,
  searchBy?: string,
  search?: string
): ILoadData => ({
  type: FetchActionsTypes.LOAD_DATA,
  offset,
  sortBy,
  searchBy,
  search,
});

export interface ILoadedData {
  type: FetchActionsTypes.MERGE_DATA;
  payload: IMovie[];
}

export const mergeData = (movies: IMovie[]): ILoadedData => ({
  type: FetchActionsTypes.MERGE_DATA,
  payload: movies,
});

export type FetchActions =
  | IMoviesRequested
  | IMoviesRecieved
  | IMoviesFailed
  | ISelectedMovieRequested
  | ISelectedMovieRecieved
  | ISelectedMovieFailed
  | ILoadData
  | ILoadedData;
