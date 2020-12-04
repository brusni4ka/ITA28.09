
import React, { useEffect } from "react";

import { RouteComponentProps } from "react-router-dom";
import MovieHeader from "../MovieHeader";
import MovieInfo from "../MovieInfo";
import SameGenrePanel from "../SameGenrePanel";
import Footer from "../../Shared/footer";
import "./MovieDetailsMain.css";
import IMovie from "../../Interfaces/IMovie";
import Movie from "../../Shared/movie";
import { PropsFromRedux } from "./index";

interface IMovies {
  movies: IMovie[];
}

type MovieDetailsMainProps = IMovies &
  RouteComponentProps<{ id: string }> &
  PropsFromRedux;


const MovieDetailsMain = (props: MovieDetailsMainProps) => {
  useEffect(() => {
    props.selectedMovieRequested({ id: props.match.params.id });
  }, []);

  useEffect(() => {
    props.selectedMovieRequested({ id: props.match.params.id });
  }, [props.match.params.id]);

  useEffect(() => {
    const search = movie ? props.movie.genres[0] : "";
    props.moviesRequested({
      sortBy: "release_date",
      offset: 0,
      searchBy: "genre",
      search,
    });
  }, [props.movie]);

  const increaseOffset = () => {
    const search = props.movie.genres[0];
    props.loadData({
      offset: props.offset + 10,
      sortBy: "release_date",
      searchBy: "genre",
      search,
    });
  };

  const { movie, movies, loading, error } = props;
  const genre = movie && movie.genres[0];

  return (
    <>
      <div className="movie_heading">
        <MovieHeader />
        {movie ? <MovieInfo movie={movie} /> : <div>null</div>}
      </div>
      <SameGenrePanel genre={genre} />
      <div className="movies">
        <Movie movies={movies} loading={loading} error={error} />
      </div>
      <div className="load">
        <button className="load_more" onClick={increaseOffset}>
          Load More
        </button>
      </div>
      <Footer />
    </>
  );
};


export default MovieDetailsMain;
