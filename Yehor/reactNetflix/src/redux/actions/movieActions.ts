import { createAction } from '@reduxjs/toolkit'
import IMovie from "../../interfaces/IMovie";

export enum MovieTypes {
  CurrentMovieLoad = "CurrentMovieLoad",
  CurrentMovieReceived = "CurrentMovieReceived",
  CurrentMovieError = "CurrentMovieError",
}

interface IcurrentMovieLoad {
  payload: {
    status: string,
    id: string
  }
}

export const currentMovieLoad = createAction("CurrentMovieLoad", function prepare(status: string, id: string): IcurrentMovieLoad {
  return {
    payload: {
      status,
      id
    }
  }
})

interface IcurrentMovieReceived {
  payload: {
    status: string,
    movie: IMovie,
    id: string
  }
}
export const currentMovieReceived = createAction("CurrentMovieReceived", function prepare(status: string, movie: IMovie): IcurrentMovieReceived {
  return {
    payload: {
      status,
      movie,
      id: ""
    }
  }
})

interface IcurrentMovieError {
  payload: {
    status: string,
    movie: null,
    id: string
  }
}
export const currentMovieError = createAction("CurrentMovieError", function prepare(status: string) {
  return {
    payload: {
      status,
      movie: null,
      id: ""
    }
  }
})

export type IMovieAction = IcurrentMovieLoad | IcurrentMovieReceived | IcurrentMovieError;


// export interface ICurrentMovieLoad {
//   type: MovieTypes;
//   status: string;
//   movie: null;
//   id: string;
// }

// export const currentMovieLoad = (
//   status: string,
//   id: string
// ): ICurrentMovieLoad => ({
//   type: MovieTypes.CurrentMovieLoad,
//   status,
//   movie: null,
//   id,
// });

export interface ICurrentMovieReceived {
  type: MovieTypes;
  status: string;
  movie: IMovie;
  id: string;
}

// export const currentMovieReceived = (
//   status: string,
//   movie: IMovie
// ): ICurrentMovieReceived => ({
//   type: MovieTypes.CurrentMovieReceived,
//   status,
//   movie,
//   id: "",
// });

export interface ICurrentMovieError {
  type: MovieTypes;
  status: string;
  movie: null;
  id: string;
}

// export const currentMovieError = (status: string): ICurrentMovieError => ({
//   type: MovieTypes.CurrentMovieError,
//   status,
//   movie: null,
//   id: "",
// });


