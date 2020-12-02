import React from "react";
import "./MoviesList.css";
import Movie from "../movie";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IMovies from "../../interfaces/IMovies";
import InfiniteScroll from 'react-infinite-scroller';

function MoviesList({ movies }: IMovies) {
  return (
    <main>
      {movies.map((movie) => (
        <Link to={`/film/${movie.id}`} key={movie.id}>
          <Movie key={movie.id} movie={movie} />
        </Link>
      ))}
    </main>
  );
}

export default MoviesList;
