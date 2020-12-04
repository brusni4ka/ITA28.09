import React from "react";
import { IMovie } from "../../types";
import Loader from "../Loader";
import Image from "../../components/Image";
import "./Movie.scss";

interface IMovieProps {
  movie: IMovie;
  isLoading: boolean;
}

const Movie = ({ movie, isLoading }: IMovieProps) => {
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  } else {
    return (
      <div className="movie">
        <div className="movie__description">
          <div className="movie__poster">
            <Image poster_path={movie.poster_path} title={movie.title} />
          </div>
          <div className="movie__info">
            <div className="movie__heading">
              <h2>{movie.title}</h2>
              <p>{movie.vote_average}</p>
            </div>
            <h2>{movie.genres.join(", ")}</h2>
            <span className="movie__genre">
              {movie.release_date.substr(0, 4)}
            </span>
            <span>{movie.runtime} min</span>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Movie;
