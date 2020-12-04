import React from "react";
import "./Movie.css";
import IMovie from "../../interfaces/IMovie";

interface IMovieProps {
  movie: IMovie;
}

function Movie({ movie }: IMovieProps) {

  const defimg = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://media.comicbook.com/files/img/default-movie.png";
  }
  return (
    <div className="movie">
      <img src={movie.poster_path} alt={movie.title} onError={defimg}/>
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
