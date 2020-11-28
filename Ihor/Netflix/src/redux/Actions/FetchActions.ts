import { FetchActionsTypes } from "../Reducers/FetchReducer";
import IMovie from "../../Interfaces/IMovie";

export interface IMoviesRequested {
  type: FetchActionsTypes.MOVIES_REQUESTED;
  sortBy: string;
  searchBy?: string;
  search?: string;
}

export const MoviesRequested = (
  sortBy: string,
  searchBy?: string,
  search?: string
): IMoviesRequested => ({
  type: FetchActionsTypes.MOVIES_REQUESTED,
  sortBy,
  searchBy,
  search,
});

export interface IMoviesRecieved {
  type: FetchActionsTypes.MOVIES_RECIEVED;
  payload: IMovie[];
}

export const MoviesRecieved = (movies: IMovie[]): IMoviesRecieved => ({
  type: FetchActionsTypes.MOVIES_RECIEVED,
  payload: movies,
});

export interface IMoviesFailed {
  type: FetchActionsTypes.MOVIES_FAILED;
}

export const MoviesFailed = (): IMoviesFailed => ({
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

export type FetchActions =
  | IMoviesRequested
  | IMoviesRecieved
  | IMoviesFailed
  | ISelectedMovieRequested
  | ISelectedMovieRecieved
  | ISelectedMovieFailed;
