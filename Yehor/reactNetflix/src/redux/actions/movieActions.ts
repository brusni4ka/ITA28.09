import IMovie from "../../interfaces/IMovie";

export enum MovieTypes {
  CurrentMovieLoad = "CurrentMovieLoad",
  CurrentMovieReceived = "CurrentMovieReceived",
  CurrentMovieError = "CurrentMovieError",
}

export interface ICurrentMovieLoad {
  type: MovieTypes;
  status: string;
  movie: null;
  id: string;
}

export const currentMovieLoad = (
  status: string,
  id: string
): ICurrentMovieLoad => ({
  type: MovieTypes.CurrentMovieLoad,
  status,
  movie: null,
  id,
});

export interface ICurrentMovieReceived {
  type: MovieTypes;
  status: string;
  movie: IMovie;
  id: string;
}

export const currentMovieReceived = (
  status: string,
  movie: IMovie
): ICurrentMovieReceived => ({
  type: MovieTypes.CurrentMovieReceived,
  status,
  movie,
  id: "",
});

export interface ICurrentMovieError {
  type: MovieTypes;
  status: string;
  movie: null;
  id: string;
}

export const currentMovieError = (status: string): ICurrentMovieError => ({
  type: MovieTypes.CurrentMovieError,
  status,
  movie: null,
  id: "",
});

export type IMovieAction =
  | ICurrentMovieLoad
  | ICurrentMovieReceived
  | ICurrentMovieError;
