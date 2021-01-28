import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import DetailedMovie from "../../components/detailedMovie";
import MoviesList from "../../components/moviesList";
import SortByGenrePanel from "../../components/sortBygenre-panel";
import { RouteComponentProps } from "react-router-dom";
import {
  currentMovieLoad,
  currentMovieReceived,
} from "../../redux/reducers/reducerMovie";
import {
  loadData,
  dataOffsetIncrement,
  dataOffsetDecrement,
} from "../../redux/reducers/reducerMovies";
import { useDispatch, useSelector } from "react-redux";
import IReduxState from "../../interfaces/IReduxState";

const DetailedPage = (props: RouteComponentProps<{ id: string }>) => {
  
  const movie = useSelector((state: IReduxState) => state.movie.movie)
  const id = useSelector((state: IReduxState) => state.movie.id)
  const movies = useSelector((state: IReduxState) => state.movies.movies)
  const offset = useSelector((state: IReduxState) => state.movies.offset)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentMovieLoad({
      status: "movie is loading",
      id: props.match.params.id,
    }));
    return () => {
      dispatch(currentMovieReceived({ status: "creaned", movie: null }));
    };
  }, [props.match.params.id]);

  useEffect(() => {
    if (movie) {
      const searchBy = "genres";
      const search = movie.genres[0];
      dispatch(loadData({
        sortBy: "release_date",
        searchBy: searchBy,
        search: search,
        offset: offset,
      }));
    }
  }, [movie, offset]);

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
        {movie ? (
          <SortByGenrePanel genre={movie.genres[0]} />
        ) : (
          <SortByGenrePanel genre={"genre"} />
        )}
      </div>
      <div className="main-container">
        <MoviesList movies={movies} />
        <div className="pagination">
          <button onClick={() => dispatch(dataOffsetDecrement())}>Back</button>
          <span className="pages">
            {offset ? offset / 9 + 1 : 1}
          </span>
          <button onClick={() => dispatch(dataOffsetIncrement())}>Next</button>
        </div>
      </div>
      <div className="wrapper-footer">
        <div className="main-container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
