import React from "react";
import "./movie.css";
import MovieCard from "../../HomePage/movieCard";
import IMovie from "../../Interfaces/IMovie";

interface IAppProps {
  movies: IMovie[];
}

function Movies({ movies }: IAppProps) {
  return (
    <>
      {movies.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </>
  );
}

export default Movies;
