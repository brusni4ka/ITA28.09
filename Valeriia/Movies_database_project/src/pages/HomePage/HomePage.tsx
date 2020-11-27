import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import SearchForm from "../../components/SearchForm";
import SortPannel from "../../components/SortPannel";
import Loader from "../../components/Loader";
import Movies from "../../components/Movies";
import NotFound from "../../components/NotFound";
import { RouteComponentProps } from "react-router";
import { parse, stringify } from "query-string";
import Header from "../../components/Header";
import { IRootState } from "../../index";
import { onRequestMovies } from "../../store/actions/moviesAction";
import { IMoviesState } from "../../store/reducers/MoviesReducer";

type MoviesProps = MoviesConnectProps & RouteComponentProps;

class HomePage extends Component<MoviesProps, IMoviesState> {
  onSearchHandler = (searchTerm: string, filterBy: string): void => {
    const queryUrl = parse(this.props.location.search) as {
      searchTerm: string;
      filterBy: string;
      sortBy: string;
    };
    const { sortBy } = queryUrl;
    const query = stringify({ ...queryUrl, searchTerm, filterBy });
    const sortByType = sortBy ? sortBy : "release_date";
    this.props.onRequestMovies(sortByType, filterBy, searchTerm);
    this.props.history.push({
      pathname: "/",
      search: query,
    });
  };

  componentDidMount = () => {
    const queryUrl = parse(this.props.location.search) as {
      filterBy: string;
      searchTerm: string;
      sortBy: string;
    };
    const { searchTerm, filterBy, sortBy } = queryUrl;
    const sortByType = sortBy ? sortBy : "release_date";
    this.props.onRequestMovies(sortByType, filterBy, searchTerm);
  };

  componentDidUpdate = (prevProps: RouteComponentProps) => {
    if (this.props.location !== prevProps.location) {
      const queryUrl = parse(this.props.location.search) as {
        filterBy: string;
        searchTerm: string;
        sortBy: string;
      };
      const { searchTerm, filterBy, sortBy } = queryUrl;
      const sortByType = sortBy ? sortBy : "release_date";
      this.props.onRequestMovies(sortByType, filterBy, searchTerm);
    }
  };

  onClickSortByHandler = (sortByType: string) => {
    const queryUrl = parse(this.props.location.search) as {
      filterBy: string;
      searchTerm: string;
    };
    const { filterBy, searchTerm } = queryUrl;
    const query = stringify({ ...queryUrl, sortBy: sortByType });
    this.props.history.push({
      pathname: "/",
      search: query,
    });
    this.props.onRequestMovies(sortByType, filterBy, searchTerm);
  };

  render() {
    let moviesResult;
    if (!this.props.isLoading && this.props.isError) {
      moviesResult = (
        <NotFound message="Please try again, something went wrong..." />
      );
    } else if (!this.props.isLoading && !this.props.movies.length) {
      moviesResult = <NotFound message="No films found" />;
    } else if (this.props.isLoading) {
      moviesResult = <Loader isLoading={this.props.isLoading} />;
    } else {
      moviesResult = <Movies movies={this.props.movies} />;
    }

    return (
      <>
        <Header isLinkToShow={false} />
        <SearchForm onSearchClick={this.onSearchHandler} />
        <SortPannel
          moviesCount={this.props.movies.length}
          onClickSortBy={this.onClickSortByHandler}
          sortBy={this.props.sortBy}
        />
        {moviesResult}
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
    sortBy: state.movies.sortBy,
    isError: state.movies.isError,
  };
};

const mapDispatchToProps = {
  onRequestMovies,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type MoviesConnectProps = ConnectedProps<typeof connector>;
export default connector(HomePage);
