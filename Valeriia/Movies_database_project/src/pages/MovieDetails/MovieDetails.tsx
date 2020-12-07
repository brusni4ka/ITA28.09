import React, { useEffect } from "react";
import Movie from "../../components/Movie";
import { RouteComponentProps } from "react-router";
import Movies from "../../components/Movies";
import "./MovieDetails.scss";
import Header from "../../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMovie } from "../../types";
import { ON_REQUEST_MOVIES } from "../../store/actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";
import { IRootMovieState, IRootState } from "../..";
import { ON_REQUEST_MOVIE } from "../../store/actions/movieActions";

interface IRouteInfo {
  id: string;
}

const MovieDetails = (props: RouteComponentProps<IRouteInfo>) => {
  const movie = useSelector((state: IRootMovieState) => state.movie.movie);
  const movies = useSelector((state: IRootMovieState) => state.movies.movies);
  const total = useSelector((state: IRootState) => state.movies.total);

  const isMoviesLoading = useSelector(
    (state: IRootMovieState) => state.movies.isLoading
  );

  const isMovieLoading = useSelector(
    (state: IRootMovieState) => state.movie.isLoading
  );

  const isError = useSelector((state: IRootMovieState) => state.movies.isError);
  const dispatch = useDispatch();

  const fetchData = (
    offset: number = 0,
    isLazyLoading: boolean = false,
    movie: IMovie
  ) => {
    dispatch({
      type: ON_REQUEST_MOVIES,
      payload: {
        sortByType: "genres",
        searchBy: "release_date",
        searchValue: movie.genres.join(","),
        offset,
        isLazyLoading,
      },
    });
  };

  useEffect(() => {
    const filmId = Number(props.match.params.id);
    dispatch({ type: ON_REQUEST_MOVIE, payload: { id: filmId } });
    window.scrollTo(0, 0);
  }, [props.match.params.id, dispatch]);

  return (
    <>
      <Header isLinkToShow={true} />
      <div className="movieDetails">
        {movie ? (
          <Movie movie={movie} isLoading={isMovieLoading} />
        ) : (
          <div>
            <p>The film by this id is not exist</p>
          </div>
        )}
      </div>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => fetchData(movies.length + 10, true, movie!)}
        hasMore={movies.length < total ? true : false}
        loader={<h4>Loading...</h4>}
      >
        <Movies movies={movies} isLoading={isMoviesLoading} isError={isError} />
      </InfiniteScroll>
    </>
  );
};

export default MovieDetails;
