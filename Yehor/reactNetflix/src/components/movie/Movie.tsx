import React from "react";
import "./Movie.css";
import IMovie from "../../interfaces/IMovie";

interface IMovieProps {
  movie: IMovie;
}

function Movie({ movie }: IMovieProps) {
  return (
    <div className="movie">
      <img src={movie.poster_path} alt={movie.title} />
      <div className="info">
        <div className="title-genres">
          <div className="title">{movie.title}</div>
          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={movie.genres.indexOf(genre)}>{genre}</span>
            ))}
          </div>
        </div>
        <div className="date">{movie.release_date.substr(0, 4)}</div>
      </div>
    </div>
  );
}

export default Movie;
