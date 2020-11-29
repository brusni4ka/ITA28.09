import React from "react";
import "./DetailedMovie.css";
import IMovie from "../../interfaces/IMovie";

interface IMovieProps {
  movie: IMovie;
}

function DetailedMovie({ movie }: IMovieProps) {
  console.log(movie);
  
  return (
    <div className="dmovie">
      <img className="dmovie_img" src={movie.poster_path} alt={movie.title} />
      <div className="dmovie_movieInfo">
        <div className="dmovie_title-rating">
          <h1 className="dmovie_title">{movie.title}</h1>
          <div className="dmovie_rating">{movie.vote_average}</div>
        </div>
        <p className="dmovie_tagline">{movie.tagline}</p>
        <div className="dmovie_date-runtime">
          <span className="dmovie_date">{movie.release_date.substr(0, 4)}</span>
          <span>{movie.runtime + " min"}</span>
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default DetailedMovie;
