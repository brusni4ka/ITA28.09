import IFilm from '../interfaces/IFilm'
export default interface IFilmProps {
  films: IFilm[],
  handlePagination?(offset: number): void
};