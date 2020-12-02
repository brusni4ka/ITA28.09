import React from "react";
import "./MovieItem.scss";
import placeholder from "../../assets/images/placeholder.jpg";

interface IMovieItemProps {
  poster_path: string;
  title: string;
  release_date: string;
  genres: string[];
}

const MovieItem = ({
  poster_path,
  title,
  release_date,
  genres,
}: IMovieItemProps) => {
  const handlerImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = placeholder;
  };

  return (
    <div className="item">
      <div className="item__poster">
        <img
          src={poster_path}
          onError={(e) => handlerImage(e)}
          alt="movie"
          className="item__img"
        />
      </div>
      <div className="item__info">
        <span>{title}</span>
        <span className="item__date">{release_date.substr(0, 4)}</span>
      </div>
      <div className="item__genre">
        <span>{genres.join(", ")}</span>
      </div>
    </div>
  );
};

export default MovieItem;
