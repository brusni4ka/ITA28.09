import HomePage from './HomePage';
import { connect, ConnectedProps } from "react-redux";
import { onRequestMovies } from "../../store/actions/moviesAction";
import { IRootState } from "../../index";

const mapStateToProps = (state: IRootState) => {
    return {
      movies: state.movies.movies,
      isLoading: state.movies.isLoading,
      sortBy: state.movies.sortBy,
      isError: state.movies.isError,
    };
  };
  
const mapDispatchToProps = {
    onRequestMovies,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type MoviesConnectProps = ConnectedProps<typeof connector>;
export default connector(HomePage);