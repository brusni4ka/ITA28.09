import IFilm from './IFilm';

export interface IRootState {
  films: {
    films: IFilm[],
    currentFilm: IFilm,
  },
  id: string
};