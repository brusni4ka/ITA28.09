import React, { Component } from "react";
import Movie from "../../components/Movie";
import { RouteComponentProps } from "react-router";
import Movies from "../../components/Movies";
import "./MovieDetails.scss";
import Header from "../../components/Header";
import { IMovieDetailsState } from "../../store/reducers/MovieReducer";
import { MovieConnectProps } from "./index";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMovie } from "../../types";

interface IRouteInfo {
  id: string;
}

type MovieProps = MovieConnectProps & RouteComponentProps<IRouteInfo>;

class MovieDetails extends Component<MovieProps, IMovieDetailsState> {
  fetchData = (
    offset: number = 0,
    isLazyLoading: boolean = false,
    movie: IMovie
  ) => {
    this.props.onRequestMovies(
      "genres",
      "release_date",
      movie.genres.join(","),
      offset,
      isLazyLoading
    );
  };

  componentDidMount = () => {
    const filmId = Number(this.props.match.params.id);
    this.props.onRequestMovie(filmId);
    window.scrollTo(0, 0);
  };

  componentDidUpdate = (prevProps: MovieProps) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const filmId = Number(this.props.match.params.id);
      this.props.onRequestMovie(filmId);
      window.scrollTo(0, 0);
    }
  };

  render() {
    return (
      <>
        <Header isLinkToShow={true} />
        <div className="movieDetails">
          {this.props.movie ? (
            <Movie movie={this.props.movie!} isLoading={this.props.isLoading} />
          ) : (
            <div>
              <p>The film by this id is not exist</p>
            </div>
          )}
        </div>
        <InfiniteScroll
          dataLength={this.props.movies.length}
          next={() =>
            this.fetchData(
              this.props.movies.length + 10,
              true,
              this.props.movie!
            )
          }
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Movies
            movies={this.props.movies}
            isLoading={this.props.isLoading}
            isError={this.props.isError}
          />
        </InfiniteScroll>
      </>
    );
  }
}

export default MovieDetails;
