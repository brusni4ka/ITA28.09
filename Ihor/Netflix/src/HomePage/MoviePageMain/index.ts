import MoviePageMain from "./MoviePageMain";
import { connect, ConnectedProps } from "react-redux";

import { moviesRequested, loadData } from "../../redux/Reducers/FetchReducer";

import IRootState from '../../Interfaces/IRootState';




const mapStateToProps = (state: IRootState) => ({
  movies: state.movies.movies,
  sortBy: state.movies.sortBy,
  loading: state.movies.loading,
  error: state.movies.error,
  offset: state.movies.offset,
});

const mapDispatchToProps = {
  moviesRequested,
  loadData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MoviePageMain);
