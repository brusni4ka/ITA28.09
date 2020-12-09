import React from "react";
import "./MovieItem.scss";
import Image from "../../components/Image";

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
  return (
    <div className="item">
      <div className="item__poster">
        <Image poster_path={poster_path} title={title} />
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
