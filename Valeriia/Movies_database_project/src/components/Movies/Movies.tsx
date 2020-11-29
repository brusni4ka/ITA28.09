import React from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import { IMovie } from "../../types";
import "./Movies.scss";
import NotFound from "../NotFound";
import Loader from "../Loader";

interface IMoviesProps {
  movies: IMovie[];
  isLoading: boolean;
  isError: boolean;
}

const Movies = ({ movies, isLoading, isError }: IMoviesProps) => {
  if (!isLoading && isError) {
    return <NotFound message="Please try again, something went wrong..." />;
  } else if (!isLoading && !movies.length) {
    return <NotFound message="No films found" />;
  } else if (isLoading) {
    return <Loader isLoading={isLoading} />;
  } else {
    return (
      <div className="movies">
        {movies.map((item) => {
          return (
            <Link
              to={"/film/" + item.id}
              key={item.id}
              className="movies__item"
            >
              <MovieItem {...(item as IMovie)} />
            </Link>
          );
        })}
      </div>
    );
  }
};

export default Movies;
