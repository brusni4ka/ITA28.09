import React from "react";
import "./MoviesList.css";
import Movie from "../movie";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IMovies from "../../interfaces/IMovies";
import { useDispatch } from "react-redux";
import {
  dataOffsetToNull
} from "../../redux/reducers/reducerMovies";

function MoviesList({ movies }: IMovies) { 
  const dispatch = useDispatch()
  return (
    <main>
      {movies.map((movie) => (
        <Link to={`/film/${movie.id}`} key={movie.id} onClick={() => dispatch(dataOffsetToNull())}>
          <Movie key={movie.id} movie={movie}/>
        </Link>
      ))}
    </main>
  );
}

export default MoviesList;
