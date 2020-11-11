import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import SortPannel from "./components/SortPannel";
import Loader from "./components/Loader";
import movies from "./movies.json";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";
import { IMovie } from "./types";
import "./App.scss";

interface IAppState {
  movies: IMovie[] | [];
  isLoading: boolean;
  tempListOfMovies: IMovie[] | [];
  filterBy: string;
  sortBy: string;
  searchTerm: string;
  movie?: IMovie;
}

class App extends Component<{}, IAppState> {
  state = {
    movies: [],
    isLoading: false,
    tempListOfMovies: [],
    filterBy: "title",
    sortBy: "date",
    searchTerm: "",
    movie: undefined,
  };

  onSearchHandler = () => {
    this.setState({ movie: undefined, isLoading: true, searchTerm: "" });
    const { searchTerm, filterBy, movies } = this.state;
    const tempListOfMovies = movies.filter(
      (movie) => movie[filterBy] === searchTerm
    );
    setTimeout(() => {
      this.setState({ tempListOfMovies, isLoading: false });
    }, 1000);
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        movies: movies,
        isLoading: false,
        tempListOfMovies: movies.sort((a, b) => b.date - a.date),
      });
    }, 1000);
  };

  onChangeFilterByHandler = (filterBy: string) => {
    this.setState({ filterBy });
  };

  onChangeHandler = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  onClickSortByHandler = (sortByType: string) => {
    this.setState({ sortBy: sortByType });
    const { tempListOfMovies } = this.state;
    const tempListSortMovies = tempListOfMovies.sort((a, b) => {
      return b[sortByType] - a[sortByType];
    });
    this.setState({ tempListOfMovies: tempListSortMovies });
  };

  moviesBySameGenre = (movie: IMovie) => {
    const filteredMovies = movies.filter((movieItem) => {
      return movieItem.genre === movie.genre && movieItem.id !== movie.id;
    });
    return filteredMovies;
  };

  onClickByMovie = (id: number) => {
    const { tempListOfMovies } = this.state;
    const movie = tempListOfMovies.find((item: IMovie) => item.id === id);
    this.setState({ movie });
    const moviesByGenre = this.moviesBySameGenre(movie!);
    this.setState({ tempListOfMovies: moviesByGenre });
  };

  onBackToSearchHandler = () => {
    const { movies } = this.state;
    this.setState({
      movie: undefined,
      tempListOfMovies: movies.sort((a: IMovie, b: IMovie) => b.date - a.date),
    });
  };

  onKeyPressHandler = (e: any) => {
    if (e.keyCode === 13 || e.charCode === 13) {
      this.onSearchHandler();
    }
  };

  render() {
    return (
      <div className="app">
        <Header
          onClickSearch={this.onSearchHandler}
          searchTerm={this.state.searchTerm}
          onChange={this.onChangeHandler}
          onClickFilterBy={this.onChangeFilterByHandler}
          filterBy={this.state.filterBy}
          onKeyPress={this.onKeyPressHandler}
        />
        <SortPannel
          moviesCount={this.state.tempListOfMovies.length}
          onClickSortBy={this.onClickSortByHandler}
          sortBy={this.state.sortBy}
        />
        <Loader isLoading={this.state.isLoading} />
        {this.state.movie && (
          <Movie
            movie={this.state.movie!}
            onClickSearch={this.onBackToSearchHandler}
          />
        )}

        {!!this.state.tempListOfMovies.length && (
          <Movies
            movies={this.state.tempListOfMovies}
            onClickHandler={this.onClickByMovie}
          />
        )}
        {!this.state.isLoading && !this.state.tempListOfMovies.length && (
          <NotFound />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
