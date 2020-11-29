import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import DetailedMovie from "../../components/detailedMovie";
import MoviesList from "../../components/moviesList";
import SortByGenrePanel from "../../components/sortBygenre-panel";
import { RouteComponentProps } from "react-router-dom";
import IMovies from "../../interfaces/IMovies";
import IMovie from "../../interfaces/IMovie";
import {
  CurrentMovieLoad,
  CurrentMovieReceived,
} from "../../redux/actions/movieActions";
import { connect, ConnectedProps } from "react-redux";

interface IRootState {
  movie: { movie: IMovie };
  id: string;
  movies: any;
}

const mapStateToProps = (state: IRootState) => {
  return {
    movie: state.movie.movie,
    id: state.id,
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = {
  CurrentMovieLoad,
  CurrentMovieReceived,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type DetailedPageProps = PropsFromRedux & RouteComponentProps<{ id: string }>;

class DetailedPage extends React.Component<DetailedPageProps, {}> {
  componentDidMount() {
    const filmId = this.props.match.params.id;
    console.log(filmId);
    this.props.CurrentMovieLoad("movie is loading", filmId);
  }

  render() {
    const { movie } = this.props;
    console.log(movie);

    return (
      <div className="allpageWrapper">
        <div className="wrapper">
          <div className="blur">
            <div className="top-container">
              <Header />
              {movie ? (
                <DetailedMovie movie={movie} />
              ) : (
                <div>There is no movie</div>
              )}
            </div>
          </div>
        </div>
        <div className="main-container">
          <SortByGenrePanel />
        </div>
        {/* <div className="main-container">
        <MoviesList movies={movies} />
      </div> */}
        <div className="wrapper-footer">
          <div className="main-container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default connector(DetailedPage);
