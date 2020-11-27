import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import Movie from "../../components/Movie";
import { RouteComponentProps } from "react-router";
import Movies from "../../components/Movies";
import "./MovieDetails.scss";
import Header from "../../components/Header";
import { IMovieDetailsState } from "../../store/reducers/MovieReducer";
import { onRequestMovie } from "../../store/actions/movieActions";
import { IRootMovieState } from "../../index";

interface IRouteInfo {
  id: string;
}

type MovieProps = MovieConnectProps & RouteComponentProps<IRouteInfo>;

class MovieDetails extends Component<MovieProps, IMovieDetailsState> {
  componentDidMount = () => {
    const filmId = Number(this.props.match.params.id);
    this.props.onRequestMovie(filmId);
  };

  componentDidUpdate = (prevProps: MovieProps) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const filmId = Number(this.props.match.params.id);
      this.props.onRequestMovie(filmId);
    }
  };

  render() {
    return (
      <>
        <Header isLinkToShow={true} />
        <div className="movieDetails">
          {this.props.movie ? (
            <Movie movie={this.props.movie!} />
          ) : (
            <div>
              <p>The film by this id is not exist</p>
            </div>
          )}
        </div>
        {this.props.movies && <Movies movies={this.props.movies} />}
      </>
    );
  }
}

const mapStateToProps = (state: IRootMovieState) => {
  return {
    movie: state.movie.movie,
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = {
  onRequestMovie,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type MovieConnectProps = ConnectedProps<typeof connector>;
export default connector(MovieDetails);
