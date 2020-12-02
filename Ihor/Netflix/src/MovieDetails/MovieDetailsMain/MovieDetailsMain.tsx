import React from "react";
import { RouteComponentProps } from "react-router-dom";
import MovieHeader from "../MovieHeader";
import MovieInfo from "../MovieInfo";
import SameGenrePanel from "../SameGenrePanel";
import Footer from "../../Shared/footer";
import "./MovieDetailsMain.css";
import IMovie from "../../Interfaces/IMovie";
import Movie from "../../Shared/movie";
import { PropsFromRedux } from "./index";

interface IMovies {
  movies: IMovie[];
}

type MovieDetailsMainProps = IMovies &
  RouteComponentProps<{ id: string }> &
  PropsFromRedux;

class MovieDetailsMain extends React.Component<MovieDetailsMainProps> {
  componentDidMount() {
    this.props.selectedMovieRequested(this.props.match.params.id);
  }

  componentDidUpdate(prevProps: MovieDetailsMainProps) {
    if (this.props.movie !== prevProps.movie) {
      const search = this.props.movie.genres[0];
      this.props.MoviesRequested("release_date", 2, "genre", search);
    }
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.selectedMovieRequested(this.props.match.params.id);
    }
  }
  increaseOffset = () => {
    this.props.loadData(this.props.offset + 10);
  };


  render() {
    const { movie, movies, loading, error } = this.props;
    const genre = movie && movie.genres[0];

    return (
      <>
        <div className="movie_heading">
          <MovieHeader />
          {movie ? <MovieInfo movie={movie} /> : <div>null</div>}
        </div>
        <SameGenrePanel genre={genre} />
        <div className="movies">
          <Movie movies={movies} loading={loading} error={error} />
        </div>
        <button className="load_more" onClick={() => this.increaseOffset()}>
            Load More
          </button>
        <Footer />
      </>
    );
  }
}

export default MovieDetailsMain;
