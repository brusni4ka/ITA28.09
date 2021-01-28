import React from "react";
import "./Movie.css";
import IMovie from "../../interfaces/IMovie";
import ImageFallBack from "../imageFallBack";

interface IMovieProps {
  movie: IMovie;
}

function Movie({movie}: IMovieProps) {
  return (
    <div className="movie">
      <ImageFallBack
        posterPic={movie.poster_path}
        alt={movie.title}
        defaultPic="https://media.comicbook.com/files/img/default-movie.png"
      />
      <div className="info">
        <div className="title-genres">
          <div className="title">{movie.title}</div>
          <div className="genres">
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </div>
        </div>
        <div className="date">{movie.release_date.substr(0, 4)}</div>
      </div>
    </div>
  );
}

export default Movie;
