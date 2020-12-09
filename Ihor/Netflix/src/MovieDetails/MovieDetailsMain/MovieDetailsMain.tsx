import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import MovieHeader from "../MovieHeader";
import MovieInfo from "../MovieInfo";
import SameGenrePanel from "../SameGenrePanel";
import Footer from "../../Shared/footer";
import "./MovieDetailsMain.css";
import IMovie from "../../Interfaces/IMovie";
import Movie from "../../Shared/movie";
import { useSelector,useDispatch } from 'react-redux';
import IRootState from '../../Interfaces/IRootState';

interface IMovies {
  movies: IMovie[];
}

type MovieDetailsMainProps = IMovies &
  RouteComponentProps<{ id: string }>;

const MovieDetailsMain = (props: MovieDetailsMainProps) => {

  const dispatch = useDispatch();

  const movies = useSelector((state: IRootState) => state.movies.movies);
  const offset = useSelector((state: IRootState) => state.movies.offset);
  const loading = useSelector((state: IRootState) => state.movies.loading);
  const error = useSelector((state: IRootState) => state.movies.error);
  const movie = useSelector((state: IRootState) => state.movies.movie);

  useEffect(() => {
    dispatch({
      type: "movies/selectedMovieRequested",
      payload:{id: props.match.params.id}
    });
  }, [props.match.params.id,dispatch]);

  useEffect(() => {
    if(movie){
      const search = movie.genres[0];
      dispatch({
        type: "movies/moviesRequested",
        payload:{
          sortBy: "release_date",
          offset: 0,
          searchBy: "genres",
          search,
        }
      });
    }
  }, [movie,dispatch]);

  const increaseOffset = () => {
    if(movie){
      const search = movie.genres[0];
      dispatch({
        type: "movies/loadData",
        payload:{
          offset: offset + 10,
          sortBy: "release_date",
          searchBy: "genres",
          search,
        }
      });
    }
  };

  return (
    <>
      <div className="movie_heading">
        <MovieHeader />
        {movie ? <MovieInfo movie={movie} /> : <div>null</div>}
      </div>
      <SameGenrePanel genre={movie ? movie.genres[0] : ""} />
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
