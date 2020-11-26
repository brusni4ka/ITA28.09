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
import { onRequestMovies, onSort } from "../../store/actions/moviesAction";
import { IMoviesState } from "../../store/reducers/MoviesReducer";

type MoviesProps = MoviesConnectProps & RouteComponentProps;

class HomePage extends Component<MoviesProps, IMoviesState> {
  onSearchHandler = (searchTerm: string, filterBy: string): void => {
    const queryUrl = parse(this.props.location.search) as {
      searchTerm: string;
      filterBy: string;
    };
    const query = stringify({ ...queryUrl, searchTerm, filterBy });
    if (filterBy === "title") {
      this.props.onRequestMovies(searchTerm);
    } else {
      this.props.onRequestMovies(searchTerm);
    }

    this.props.history.push({
      pathname: "/",
      search: query,
    });
  };

  componentDidMount = () => {
    const query = parse(this.props.location.search) as {
      filterBy: string;
      searchTerm: string;
      sortBy: string;
    };
    const { searchTerm, filterBy } = query;
    if (searchTerm && filterBy === "title") {
      this.props.onRequestMovies(searchTerm);
    } else if (searchTerm && filterBy === "genre") {
      this.props.onRequestMovies(searchTerm);
    } else {
      this.props.onRequestMovies();
    }
  };

  componentDidUpdate = (prevProps: RouteComponentProps) => {
    if (this.props.location !== prevProps.location) {
      const query = parse(this.props.location.search) as {
        filterBy: string;
        searchTerm: string;
        sortBy: string;
      };
      const { searchTerm, filterBy } = query;
      if (searchTerm && filterBy === "title") {
        this.props.onRequestMovies(searchTerm);
      } else if (searchTerm && filterBy === "genre") {
        this.props.onRequestMovies(searchTerm);
      } else {
        this.props.onRequestMovies();
      }
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

    this.props.onSort(sortByType);
  };

  render() {
    return (
      <>
        <Header isLinkToShow={false} />
        <SearchForm onSearchClick={this.onSearchHandler} />
        <SortPannel
          moviesCount={this.props.movies.length}
          onClickSortBy={this.onClickSortByHandler}
          sortBy={this.props.sortBy}
        />
        <Loader isLoading={this.props.isLoading} />
        <Movies movies={this.props.movies} />
        {/* {!!this.props.tempListOfMovies.length && !this.props.isLoading && (
          <Movies movies={this.props.tempListOfMovies} />
        )} */}
        {!this.props.isLoading && !this.props.movies.length && (
          <NotFound message="No films found" />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
    sortBy: state.movies.sortBy,
  };
};

const mapDispatchToProps = {
  onSort,
  onRequestMovies,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type MoviesConnectProps = ConnectedProps<typeof connector>;
export default connector(HomePage);
