import React, { Component } from "react";
import SearchForm from "../../components/SearchForm";
import SortPannel from "../../components/SortPannel";
import Loader from "../../components/Loader";
import Movies from "../../components/Movies";
import NotFound from "../../components/NotFound";
import { IMovie } from "../../types";
import { RouteComponentProps } from "react-router";
import { parse } from "query-string";
import movies from "../../movies.json";
import Header from "../../components/Header";

interface IHomePageState {
  movies: IMovie[] | [];
  isLoading: boolean;
  tempListOfMovies: IMovie[] | [];
  movie?: IMovie;
  sortBy: string;
}

class HomePage extends Component<RouteComponentProps, IHomePageState> {
  state = {
    movies: [],
    isLoading: false,
    tempListOfMovies: [],
    movie: undefined,
    sortBy: "date",
  };

  onSearchHandler = (searchTerm: string, filterBy: string): void => {
    this.setState({ movie: undefined, isLoading: true });

    const tempListOfMovies = this.state.movies.filter(
      (movieItem: any) =>
        movieItem[filterBy] && movieItem[filterBy] === searchTerm
    );

    setTimeout(() => {
      this.setState({ tempListOfMovies, isLoading: false });
      this.props.history.push({
        pathname: "/",
        search:
          "?searchBy=" +
          filterBy +
          "&search=" +
          searchTerm +
          "&sortBy=" +
          this.state.sortBy,
      });
    }, 1000);
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      const query = parse(this.props.location.search) as {
        searchBy: string;
        search: string;
        sortBy: string;
      };
      const { searchBy, search, sortBy } = query;
      const tempListOfMovies = movies
        .filter(
          (movieItem: any) =>
            movieItem[searchBy] && movieItem[searchBy] === search
        )
        .sort((a: any, b: any) => {
          return b[sortBy] - a[sortBy];
        });

      this.setState({
        movies: movies,
        isLoading: false,
        tempListOfMovies: tempListOfMovies.length
          ? tempListOfMovies
          : movies.sort((a, b) => b.date - a.date),
      });
    }, 1000);
  };

  onClickSortByHandler = (sortByType: string) => {
    const { tempListOfMovies } = this.state;
    const tempListSortMovies = tempListOfMovies.sort((a, b) => {
      return b[sortByType] - a[sortByType];
    });
    this.setState({ sortBy: sortByType, tempListOfMovies: tempListSortMovies });
  };

  render() {
    return (
      <>
        <Header isLinkToShow={false} />
        <SearchForm
          onSearchClick={this.onSearchHandler}
          sortBy={this.state.sortBy}
        />
        <SortPannel
          moviesCount={this.state.tempListOfMovies.length}
          onClickSortBy={this.onClickSortByHandler}
          sortBy={this.state.sortBy}
        />
        <Loader isLoading={this.state.isLoading} />
        {!!this.state.tempListOfMovies.length && !this.state.isLoading && (
          <Movies movies={this.state.tempListOfMovies} />
        )}
        {!this.state.isLoading && !this.state.tempListOfMovies.length && (
          <NotFound message="No films found" />
        )}
      </>
    );
  }
}
export default HomePage;
