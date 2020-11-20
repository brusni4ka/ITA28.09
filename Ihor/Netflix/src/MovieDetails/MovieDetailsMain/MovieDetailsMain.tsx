import React from "react";
import { RouteComponentProps } from "react-router-dom";
import MovieHeader from "../MovieHeader";
import MovieInfo from "../MovieInfo";
import SameGenrePanel from "../SameGenrePanel";
import Footer from "../../Shared/footer";
import "./MovieDetailsMain.css";
import IMovie from "../../Interfaces/IMovie";
import Movie from "../../Shared/movie";

interface IMovies {
  movies: IMovie[];
}

type MovieDetailsMainProps = IMovies & RouteComponentProps<{ id: string }>;

class MovieDetailsMain extends React.Component<MovieDetailsMainProps> {
  render() {
    const { movies, match } = this.props;
    const selectedMovie = movies.find(
      (item) => String(item.id) === match.params.id
    );

    return (
      <>
        <div className="movie_heading">
          <MovieHeader />
          {selectedMovie ? (
            <MovieInfo movie={selectedMovie} />
          ) : (
            <div>null</div>
          )}
        </div>
        <SameGenrePanel />
        <div className="movies">
          <Movie movies={movies} />
        </div>
        <Footer />
      </>
    );
  }
}

export default MovieDetailsMain;
