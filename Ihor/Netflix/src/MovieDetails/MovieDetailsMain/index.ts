import MovieDetailsMain from './MovieDetailsMain';
import { selectedMovieRequested,moviesRequested,loadData} from "../../redux/Reducers/FetchReducer";
import { connect, ConnectedProps } from "react-redux";
import IRootState from '../../Interfaces/IRootState';

  
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
    moviesRequested,
    loadData
  };
  
  const connector = connect(mapStateToProps, mapDispatchToProps);
  export type PropsFromRedux = ConnectedProps<typeof connector>;





  export default connector(MovieDetailsMain);