import React from "react";
import Logo from "../Logo";
import { IMovie } from "../../types";
import Button from "../Button";
import "./index.scss";

interface IMovieProps {
  movie: IMovie;
  onClickSearch(): void;
}

const Movie = ({ movie, onClickSearch }: IMovieProps) => (
  <div className="movie">
    <div className="movie__header">
      <Logo />
      <Button
        buttonName="SEARCH"
        onClick={onClickSearch}
        className="searchButton movieButton"
      />
    </div>
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
