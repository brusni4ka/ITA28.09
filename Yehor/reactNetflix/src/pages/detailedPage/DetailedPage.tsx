import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import DetailedMovie from "../../components/detailedMovie";
import MoviesList from "../../components/moviesList";
import SortByGenrePanel from "../../components/sortBygenre-panel";
import { RouteComponentProps } from "react-router-dom";
import {
  currentMovieLoad
} from "../../redux/reducers/reducerMovie";
import {
  loadData, dataOffsetIncrement, dataOffsetDecrement
} from "../../redux/reducers/reducerMovies";
import { connect, ConnectedProps } from "react-redux";
import IReduxState from "../../interfaces/IReduxState"

const mapStateToProps = (state: IReduxState) => {
  return {
    movie: state.movie.movie,
    id: state.movie.id,
    movies: state.movies.movies,
    offset: state.movies.offset
  };
};

const mapDispatchToProps = {
  loadData,
  dataOffsetIncrement,
  dataOffsetDecrement,
  currentMovieLoad
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type DetailedPageProps = PropsFromRedux & RouteComponentProps<{ id: string }>;

const DetailedPage = (props: DetailedPageProps) => {

useEffect(() => {
      props.currentMovieLoad({status: "movie is loading", id: props.match.params.id});
}, [props.match.params.id])

useEffect(() => {
  if (props.movie) {
    const searchBy = "genres"
    const search = props.movie.genres[0]
    props.loadData({sortBy: "release_date", searchBy: searchBy, search: search, offset: props.offset})
  }
}, [props.movie, props.offset])

    const { movie, movies } = props;
    return (
      <div className="allpageWrapper">
        <div className="wrapper">
          <div className="blur">
            <div className="top-container">
              <Header />
              {movie ? (
                <DetailedMovie movie={movie} />
              ) : (
                <div>There is no movie</div>
              )}
            </div>
          </div>
        </div>
        <div className="main-container">
          {movie ? <SortByGenrePanel genre={movie.genres[0]}/>: <SortByGenrePanel genre={"genre"}/>}
        </div>
        <div className="main-container">
        <MoviesList movies={movies} />
        <div className="pagination">
            <button onClick={props.dataOffsetDecrement}>Back</button>
              <span className="pages">{props.offset? props.offset / 9 + 1: 1}</span>
            <button onClick={props.dataOffsetIncrement}>Next</button>
        </div>
      </div>
        <div className="wrapper-footer">
          <div className="main-container">
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default connector(DetailedPage);
