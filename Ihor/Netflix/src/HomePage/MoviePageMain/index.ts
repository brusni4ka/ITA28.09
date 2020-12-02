import MoviePageMain from "./MoviePageMain";
import { connect, ConnectedProps } from "react-redux";
import { MoviesRequested, loadData } from "../../redux/Actions/FetchActions";
import IMovie from '../../Interfaces/IMovie';


interface IRootState {
  movies: {
    movies:IMovie[]
    sortBy: string;
    loading: boolean;
    error: string;
    offset: number;
  };
}

const mapStateToProps = (state: IRootState) => ({
  movies: state.movies.movies,
  sortBy: state.movies.sortBy,
  loading: state.movies.loading,
  error: state.movies.error,
  offset: state.movies.offset,
});

const mapDispatchToProps = {
  MoviesRequested,
  loadData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MoviePageMain);
