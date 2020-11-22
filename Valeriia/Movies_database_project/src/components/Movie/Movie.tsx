import React from "react";
import { IMovie } from "../../types";
import "./Movie.scss";

interface IMovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: IMovieProps) => (
  <div className="movie">
    <div className="movie__description">
      <div className="movie__poster">
        <img
          src={`/images/${movie.image}`}
          alt={movie.title}
          className="movie__img"
        ></img>
      </div>
      <div className="movie__info">
        <div className="movie__heading">
          <h2>{movie.title}</h2>
          <p>{movie.vote_average}</p>
        </div>
        <h2>{movie.genre}</h2>
        <span className="movie__genre">{movie.date}</span>
        <span>{movie.duration} min</span>
        <p>{movie.description}</p>
      </div>
    </div>
  </div>
);

export default Movie;
