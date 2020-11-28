import React from "react";
import { RouteComponentProps } from "react-router-dom";
import MovieHeader from "../MovieHeader";
import MovieInfo from "../MovieInfo";
import SameGenrePanel from "../SameGenrePanel";
import Footer from "../../Shared/footer";
import "./MovieDetailsMain.css";
import IMovie from "../../Interfaces/IMovie";
import Movie from "../../Shared/movie";
import { parse } from "query-string";
import {
  selectedMovieRequested,
  MoviesRequested,
} from "../../redux/Actions/FetchActions";
import { connect, ConnectedProps } from "react-redux";

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
    const UrlData = parse(this.props.location.search) as {
      sortBy: string;
      searchBy: string;
      search: string;
    };
    const { sortBy } = UrlData;
    const searchBy = "genre";
    const search = this.props.movie.genres[0];
    this.props.match.params.id !== prevProps.match.params.id &&
      this.props.selectedMovieRequested(this.props.match.params.id) &&
      this.props.MoviesRequested(sortBy, searchBy, search);
  }

  render() {
    const { movie, movies } = this.props;
    const genre = movie && movie.genres[0];
    return (
      <>
        <div className="movie_heading">
          <MovieHeader />
          {this.props.movie ? (
            <MovieInfo movie={this.props.movie} />
          ) : (
            <div>null</div>
          )}
        </div>
        <SameGenrePanel genre={String(genre)} />
        <div className="movies">
          <Movie movies={movies} />
        </div>
        <Footer />
      </>
    );
  }
}

interface IRootState {
  movie: IMovie;
  id: string;
  movies: any;
}

const mapStateToProps = (state: IRootState) => ({
  movie: state.movies.movie,
  id: state.id,
  movies: state.movies.movies,
});

const mapDispatchToProps = {
  selectedMovieRequested,
  MoviesRequested,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MovieDetailsMain);
