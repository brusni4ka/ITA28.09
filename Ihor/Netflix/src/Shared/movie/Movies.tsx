import React from "react";
import "./movie.css";
import MovieCard from "../../HomePage/movieCard";
import IMovie from "../../Interfaces/IMovie";
import { Link } from "react-router-dom";
import NoMoviesFound from "../../Shared/NoMoviesFound";
import NotFoundError from "../../NotFoundPage/NotFoundError";
import Loader from "../../Shared/Loader";
interface IAppProps {
  movies: IMovie[];
  loading: boolean;
  error: string;
}

function Movies({ movies, loading, error }: IAppProps) {
  if (!loading && !movies.length) {
    return <NoMoviesFound message="No films found" />;
  } else if (!loading && error) {
    return <NotFoundError error={error} />;
  } else if (loading && !movies.length && !error) {
    return <Loader loading={loading} />;
  } else {
    return (
      <>
        {movies.map((film: any) => (
          <Link to={`/film/${film.id}`} key={film.id}>
            <MovieCard key={film.id} film={film} />
          </Link>
        ))}
      </>
    );
  }
}

export default Movies;
