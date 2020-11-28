import React from "react";
import "./movie.css";
import MovieCard from "../../HomePage/movieCard";
import IMovie from "../../Interfaces/IMovie";
import { Link } from "react-router-dom";

interface IAppProps {
  movies: IMovie[];
}

function Movies({ movies }: IAppProps) {
  return (
    <>
      {movies.map((film) => (
        <Link to={`/movieinfo/${film.id}`}>
          {" "}
          <MovieCard key={film.id} film={film} />
        </Link>
      ))}
    </>
  );
}

export default Movies;
