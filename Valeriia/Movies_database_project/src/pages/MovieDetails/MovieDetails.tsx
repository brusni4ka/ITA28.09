import React, { useEffect } from "react";
import Movie from "../../components/Movie";
import { RouteComponentProps } from "react-router";
import Movies from "../../components/Movies";
import "./MovieDetails.scss";
import Header from "../../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMovie } from "../../types";
import { onRequestMovies } from "../../store/actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";
import { IRootMovieState } from "../..";
import { onRequestMovie } from "../../store/actions/movieActions";

interface IRouteInfo {
  id: string;
}

const MovieDetails = (props: RouteComponentProps<IRouteInfo>) => {
  const movie = useSelector((state: IRootMovieState) => state.movie.movie);
  const movies = useSelector((state: IRootMovieState) => state.movies.movies);
  const isLoading = useSelector(
    (state: IRootMovieState) => state.movies.isLoading
  );
  const isError = useSelector((state: IRootMovieState) => state.movies.isError);
  const dispatch = useDispatch();

  const fetchData = (
    offset: number = 0,
    isLazyLoading: boolean = false,
    movie: IMovie
  ) => {
    dispatch(
      onRequestMovies(
        "genres",
        "release_date",
        movie.genres.join(","),
        offset,
        isLazyLoading
      )
    );
  };

  useEffect(() => {
    const filmId = Number(props.match.params.id);
    dispatch(onRequestMovie(filmId));
    window.scrollTo(0, 0);
  }, [props.match.params.id]);

  return (
    <>
      <Header isLinkToShow={true} />
      <div className="movieDetails">
        {movie ? (
          <Movie movie={movie!} isLoading={isLoading} />
        ) : (
          <div>
            <p>The film by this id is not exist</p>
          </div>
        )}
      </div>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => fetchData(movies.length + 10, true, movie!)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Movies movies={movies} isLoading={isLoading} isError={isError} />
      </InfiniteScroll>
    </>
  );
};

export default MovieDetails;
