import { RequestActionsTypes } from './../Redusers/requestReduser';
import IFilm from '../../interfaces/IFilm'

export interface IFilmsRequested {
  type: RequestActionsTypes.FILMS_REQUESTED,
  payload: string
};
interface IFilmsRecieved {
  type: RequestActionsTypes.FILMS_RECIEVED,
  payload: IFilm[]
};
interface IFilmsFailed {
  type: RequestActionsTypes.FILMS_FAILED
};

export interface ICurrentFilmRequested {
  type: RequestActionsTypes.CURRENTFILM_REQUESTED
  payload: string
};
interface ICurrentFilmRecieved {
  type: RequestActionsTypes.CURRENTFILM_RECIEVED
  payload: IFilm
};
interface ICurrentFilmFailed {
  type: RequestActionsTypes.CURRENTFILM_FAILED
}

export const FilmsRequested = (requestData: string):IFilmsRequested => ({
  type: RequestActionsTypes.FILMS_REQUESTED,
  payload: requestData
});
export const FilmsRecieved = (films: IFilm[]):IFilmsRecieved => ({
  type: RequestActionsTypes.FILMS_RECIEVED,
  payload: films
});
export const FilmsFailed = ():IFilmsFailed => ({
  type: RequestActionsTypes.FILMS_FAILED
});

export const CurrentFilmRequested = (id: string): ICurrentFilmRequested => ({
  type: RequestActionsTypes.CURRENTFILM_REQUESTED,
  payload: id,
});
export const CurrentFilmRecieved = (currentFilm: IFilm): ICurrentFilmRecieved => ({
  type: RequestActionsTypes.CURRENTFILM_RECIEVED,
  payload: currentFilm,
});
export const CurrentFilmFailed = (): ICurrentFilmFailed => ({
  type: RequestActionsTypes.CURRENTFILM_FAILED
})

export type RequestActions = IFilmsRequested 
  | IFilmsRecieved 
  | IFilmsFailed 
  | ICurrentFilmRequested
  | ICurrentFilmRecieved
  | ICurrentFilmFailed