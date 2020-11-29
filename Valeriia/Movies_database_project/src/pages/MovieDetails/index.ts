import MovieDetails from './MovieDetails';
import { connect, ConnectedProps } from "react-redux";
import { onRequestMovie } from "../../store/actions/movieActions";
import { IRootMovieState } from "../../index";

const mapStateToProps = (state: IRootMovieState) => {
    return {
      movie: state.movie.movie,
      movies: state.movies.movies,
      isLoading: state.movies.isLoading,
      isError: state.movies.isError
    };
  };
  
const mapDispatchToProps = {
    onRequestMovie,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type MovieConnectProps = ConnectedProps<typeof connector>;
export default connector(MovieDetails);
