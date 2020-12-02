import { RequestActionsTypes } from './../Redusers/requestReduser';
import IFilm from '../../interfaces/IFilm'

export interface IFilmsRequested {
  type: RequestActionsTypes.FILMS_REQUESTED,
  payload: {
    offset: number,
    sortBy: string,
    searchBy?: string,
    search?: string,
    pagination?: boolean,
  }
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

interface IPaginationRecieved {
  type: RequestActionsTypes.PAGINATION_RECIEVED,
  payload: IFilm[]
};
interface IPaginationFailed {
  type: RequestActionsTypes.PAGINATION_FAILED
}

export const filmsRequested = (offset: number, sortBy: string, searchBy?: string, search?: string, pagination?: boolean,):IFilmsRequested => ({
  type: RequestActionsTypes.FILMS_REQUESTED,
  payload: {
    sortBy, searchBy, search, offset, pagination
  }
});
export const filmsRecieved = (films: IFilm[]):IFilmsRecieved => ({
  type: RequestActionsTypes.FILMS_RECIEVED,
  payload: films
});
export const filmsFailed = ():IFilmsFailed => ({
  type: RequestActionsTypes.FILMS_FAILED
});

export const currentFilmRequested = (id: string): ICurrentFilmRequested => ({
  type: RequestActionsTypes.CURRENTFILM_REQUESTED,
  payload: id,
});
export const currentFilmRecieved = (currentFilm: IFilm): ICurrentFilmRecieved => ({
  type: RequestActionsTypes.CURRENTFILM_RECIEVED,
  payload: currentFilm,
});
export const currentFilmFailed = (): ICurrentFilmFailed => ({
  type: RequestActionsTypes.CURRENTFILM_FAILED
});

export const paginationRecieved = (films: IFilm[]): IPaginationRecieved => ({
  type: RequestActionsTypes.PAGINATION_RECIEVED,
  payload: films
});
export const paginationFailed = (): IPaginationFailed => ({
  type: RequestActionsTypes.PAGINATION_FAILED
});

export type RequestActions = IFilmsRequested 
  | IFilmsRecieved 
  | IFilmsFailed 
  | ICurrentFilmRequested
  | ICurrentFilmRecieved
  | ICurrentFilmFailed
  | IPaginationRecieved
  | IPaginationFailed