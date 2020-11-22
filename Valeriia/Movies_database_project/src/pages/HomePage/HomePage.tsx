import React, { Component } from "react";
import SearchForm from "../../components/SearchForm";
import SortPannel from "../../components/SortPannel";
import Loader from "../../components/Loader";
import Movies from "../../components/Movies";
import NotFound from "../../components/NotFound";
import { IMovie } from "../../types";
import { RouteComponentProps } from "react-router";
import { parse, stringify } from "query-string";
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
    sortBy: "date",
  };

  onSearchHandler = (searchTerm: string, filterBy: string): void => {
    this.setState({ movie: undefined, isLoading: true });
    const queryUrl = parse(this.props.location.search) as {
      filterBy: string;
      searchTerm: string;
    };
    const query = stringify({ ...queryUrl, filterBy, searchTerm });
    const tempListOfMovies = this.state.movies.filter(
      (movieItem) => movieItem[filterBy] && movieItem[filterBy] === searchTerm
    );
    this.setState({ tempListOfMovies, isLoading: false });
    this.props.history.push({
      pathname: "/",
      search: query,
    });
  };

  getParamFromUrlAndUpdateState = () => {
    const query = parse(this.props.location.search) as {
      filterBy: string;
      searchTerm: string;
      sortBy: string;
    };
    const { filterBy, searchTerm, sortBy } = query;
    const tempListOfMovies = movies.filter((movieItem: IMovie) => {
      if (filterBy && filterBy === "title") {
        return movieItem.title === searchTerm;
      } else {
        return movieItem.genre === searchTerm;
      }
    });

    const sortByType = sortBy ? sortBy : "date";

    this.setState({
      movies: movies,
      isLoading: false,
      sortBy: sortByType,
      tempListOfMovies: tempListOfMovies.length
        ? tempListOfMovies
        : movies.sort((a: IMovie, b: IMovie) => {
            if (sortByType === "date") {
              return b.date - a.date;
            } else {
              return b.vote_average - a.vote_average;
            }
          }),
    });
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.getParamFromUrlAndUpdateState();
    }, 1000);
  };

  componentDidUpdate = (prevProps: RouteComponentProps) => {
    if (this.props.location.search !== prevProps.location.search) {
      this.getParamFromUrlAndUpdateState();
    }
  };

  onClickSortByHandler = (sortByType: string) => {
    const queryUrl = parse(this.props.location.search) as {
      filterBy: string;
      searchTerm: string;
    };
    const query = stringify({ ...queryUrl, sortBy: sortByType });
    this.props.history.push({
      pathname: "/",
      search: query,
    });
    const { tempListOfMovies } = this.state;
    const tempListSortMovies = tempListOfMovies.sort((a, b) => {
      return b[sortByType] - a[sortByType];
    });

    this.setState({
      sortBy: sortByType,
      tempListOfMovies: tempListSortMovies,
    });
  };

  render() {
    return (
      <>
        <Header isLinkToShow={false} />
        <SearchForm onSearchClick={this.onSearchHandler} />
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
