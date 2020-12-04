import IMovie from './IMovie';
interface IRootState {
    movies: {
      movies: IMovie[];
      movie: IMovie;
      sortBy?: string;
      error: string;
      loading: boolean;
      offset: number;
    };
    id?: string;
    
}

export default IRootState;