import React, { Component } from "react";
import { IMovie } from "../../types";
import Movie from "../../components/Movie";
import { RouteComponentProps } from "react-router";
import movies from "../../movies.json";
import Movies from "../../components/Movies";
import "./MovieDetails.scss";
import Header from "../../components/Header";

interface IRouteInfo {
  id: string;
}

interface IMovieDetailsProps extends RouteComponentProps<IRouteInfo> {}

interface IMovieDetailsState {
  movie: IMovie | undefined;
  moviesBySameGenre: IMovie[];
}

class MovieDetails extends Component<IMovieDetailsProps, IMovieDetailsState> {
  state = {
    movie: undefined,
    moviesBySameGenre: [],
  };

  componentDidMount = () => {
    const filmId = this.props.match.params.id;
    let moviesData = movies;
    const movie = moviesData.find((movie) => {
      return movie.id === Number(filmId);
    });
    const moviesBySameGenre = moviesData.filter((movieByGenre) => {
      return movie?.genre === movieByGenre.genre;
    });
    this.setState({ movie, moviesBySameGenre });
  };

  componentDidUpdate = (prevProps: IMovieDetailsProps) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      let moviesData = movies;
      const movie = moviesData.find((movie) => {
        return movie.id === +this.props.match.params.id;
      });
      this.setState({ movie });
    }
  };

  render() {
    return (
      <>
        <Header isLinkToShow={true} />
        <div className="movieDetails">
          {this.state.movie ? (
            <Movie movie={this.state.movie!} />
          ) : (
            <div>
              <p>The film by this id is not exist</p>
            </div>
          )}
        </div>
        <Movies movies={this.state.moviesBySameGenre} />
      </>
    );
  }
}

export default MovieDetails;
