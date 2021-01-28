import React from "react";
import notfound from "../../img/notfound.png";
import IMovie from "../../Interfaces/IMovie";

interface ImageProps {
  film: IMovie;
  className: string;
}
const Image = ({ film, className }: ImageProps) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    target.src = notfound;
  };

  return (
    <>
      <img
        src={film.poster_path}
        alt={film.title}
        className={className}
        onError={(event) => handleImageError(event)}
      />
    </>
  );
};
export default Image;
