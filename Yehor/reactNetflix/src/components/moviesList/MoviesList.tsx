import React from "react";
import "./MoviesList.css";
import Movie from "../movie";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IMovies from "../../interfaces/IMovies";

function MoviesList({ movies }: IMovies) {
  return (
    <main>
      {movies.map((movie) => (
        <Link to={`/DetailedPage/${movie.id}`}>
          <Movie key={movie.id} movie={movie} />
        </Link>
      ))}
    </main>
  );
}

export default MoviesList;
