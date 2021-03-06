import React from "react";
import IMovie from "../../Interfaces/IMovie";
import "./MovieInfo.css";
import Image from '../../Shared/ImageComponent';
interface IMovieProps {
  movie: IMovie;
}

const MovieInfo = ({ movie }: IMovieProps) => {

  return (
    <div className="film_info">
      <Image film = {movie} className="m_img"/>
      <div className="m_info">
        <div className="main_info">
          <h2 className="m_name">{movie.title}</h2>
          <span className="m_rating">{movie.vote_average}</span>
        </div>
        <p className="m_genre">
          {movie.genres.map((item: string, i: number) => (
            <span className="genre_item" key={i}>
              {item}{" "}
            </span>
          ))}
        </p>
        <div className="m_year_time">
          <span className="m_year">{movie.release_date.substring(0, 4)}</span>
          <span className="m_time"> {movie.runtime}min</span>
        </div>
        <p className="m_overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
