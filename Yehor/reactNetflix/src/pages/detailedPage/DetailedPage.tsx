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
  LoadData,
} from "../../redux/actions/moviesActions";
import {
  CurrentMovieLoad,
} from "../../redux/actions/movieActions";
import { connect, ConnectedProps } from "react-redux";

interface IRootState {
  movies: {
    status: string,
    movies: IMovie[],
    offset: number
  },
  movie: {
    status: string,
    movie: IMovie,
    id: string
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    movie: state.movie.movie,
    id: state.movie.id,
    movies: state.movies.movies,
    offset: state.movies.offset
  };
};

const mapDispatchToProps = {
  CurrentMovieLoad,
  LoadData
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

  componentDidUpdate(prevProps: DetailedPageProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.CurrentMovieLoad("movie is loading", this.props.match.params.id);
    }
    if(this.props.movie !== prevProps.movie) {
      const searchBy = "genres"
      const search = this.props.movie.genres[0]
      this.props.LoadData("movies by genre is loading", "release_date", searchBy, search, this.props.offset)
    }
  }
 

  render() {
    const { movie, movies } = this.props;
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
          {movie ? <SortByGenrePanel genre={movie.genres[0]}/>: <SortByGenrePanel genre={"genre"}/>}
        </div>
        <div className="main-container">
        <MoviesList movies={movies} />
      </div>
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
