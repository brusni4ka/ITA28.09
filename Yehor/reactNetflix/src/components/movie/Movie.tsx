import React from "react";
import "./Movie.css";
import IMovie from "../../interfaces/IMovie";
import ReactImageFallback from "react-image-fallback";

interface IMovieProps {
  movie: IMovie;
}

function Movie({ movie }: IMovieProps) {
  return (
    <div className="movie">
      <ReactImageFallback
                    src={movie.poster_path}
                    fallbackImage="https://media.comicbook.com/files/img/default-movie.png"
                    alt={movie.title}
                    className="my-image" />
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
