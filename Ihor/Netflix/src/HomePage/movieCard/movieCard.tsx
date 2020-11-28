import React from "react";
import "./movieCard.css";
import IMovie from "../../Interfaces/IMovie";

const MovieCard = ({ film }: { film: IMovie }) => {
  return (
    <div className="movie_card">
      <img src={film.poster_path} alt={film.title} className="movie_card_img" />
      <div className="movie_info">
        <h3 className="movie_title">{film.title}</h3>
        <p className="movie_date">{film.release_date.substring(0, 4)}</p>
      </div>
      <p className="movie_genre">
        {film.genres.map((item: string, i: number) => (
          <span className="genre_item" key={i}>
            {item}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default MovieCard;
