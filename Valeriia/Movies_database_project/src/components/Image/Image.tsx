import React from "react";
import placeholder from "../../assets/images/placeholder.jpg";
import { IMovie } from "../../types";

interface IImageProps {
  poster_path: string;
  title: string;
}
const Image = (props: IImageProps) => {
  const handlerImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = placeholder;
  };
  return (
    <img
      src={props.poster_path}
      onError={(e) => handlerImage(e)}
      alt={props.title}
      className="movie__img"
    ></img>
  );
};

export default Image;
