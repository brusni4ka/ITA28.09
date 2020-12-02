import MovieDetailsMain from './MovieDetailsMain';
import { selectedMovieRequested,MoviesRequested,loadData} from "../../redux/Actions/FetchActions";
import { connect, ConnectedProps } from "react-redux";
import IMovie from '../../Interfaces/IMovie';

interface IRootState {
    movies: {
      movies: IMovie[];
      movie: IMovie;
      error: string;
      loading: boolean;
      offset: number;
    };
    id: string;
    
}
  
  const mapStateToProps = (state: IRootState) => ({
    movie: state.movies.movie,
    id: state.id,
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error,
    offset: state.movies.offset,
  });
  
  const mapDispatchToProps = {
    selectedMovieRequested,
    MoviesRequested,
    loadData
  };
  
  const connector = connect(mapStateToProps, mapDispatchToProps);
  export type PropsFromRedux = ConnectedProps<typeof connector>;





  export default connector(MovieDetailsMain);