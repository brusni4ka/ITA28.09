import React from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import { IMovie } from "../../types";
import "./Movies.scss";

interface IMoviesProps {
  movies: IMovie[];
}

const Movies = ({ movies }: IMoviesProps) => (
  <div className="movies">
    {movies.map((item) => {
      return (
        <Link to={"/film/" + item.id} key={item.id} className="movies__item">
          <MovieItem {...(item as IMovie)} />
        </Link>
      );
    })}
  </div>
);

export default Movies;
