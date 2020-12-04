import React, { Component } from "react";
import SearchForm from "../../components/SearchForm";
import SortPannel from "../../components/SortPannel";
import Movies from "../../components/Movies";
import { RouteComponentProps } from "react-router";
import { parse, stringify } from "query-string";
import Header from "../../components/Header";
import { MoviesConnectProps } from "./index";
import InfiniteScroll from "react-infinite-scroll-component";

interface IHomePageState {
  sortBy: string;
  hasMore: boolean;
}

type HomePageProps = MoviesConnectProps & RouteComponentProps;

class HomePage extends Component<HomePageProps, IHomePageState> {
  state = {
    sortBy: "release_date",
    hasMore: false,
  };

  fetchData = (offset: number = 0, isLazyLoading: boolean = false) => {
    const queryUrl = parse(this.props.location.search) as {
      filterBy: string;
      searchTerm: string;
      sortBy: string;
    };
    const { searchTerm, filterBy, sortBy } = queryUrl;
    const sortByType = sortBy ? sortBy : this.state.sortBy;
    this.props.onRequestMovies(
      sortByType,
      filterBy,
      searchTerm,
      offset,
      isLazyLoading
    );
    this.setState({ sortBy: sortByType });
  };

  onSearchHandler = (searchTerm: string, filterBy: string): void => {
    const queryUrl = parse(this.props.location.search) as {
      searchTerm: string;
      filterBy: string;
      sortBy: string;
    };
    const { sortBy } = queryUrl;
    const query = stringify({ ...queryUrl, searchTerm, filterBy });
    const sortByType = sortBy ? sortBy : this.state.sortBy;
    this.props.onRequestMovies(sortByType, filterBy, searchTerm);
    this.props.history.push({
      pathname: "/search/Search",
      search: query,
    });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  componentDidUpdate = (prevProps: HomePageProps) => {
    if (this.props.movies.length !== prevProps.movies.length) {
      this.setState({
        hasMore: this.props.movies.length > prevProps.movies.length,
      });
    }
    if (
      this.props.location !== prevProps.location &&
      this.props.history.action === "POP"
    ) {
      this.fetchData();
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
      pathname: "/search/Search",
      search: query,
    });
    this.setState({ sortBy: sortByType });
    this.props.onRequestMovies(sortByType, filterBy, searchTerm);
  };

  render() {
    return (
      <>
        <Header isLinkToShow={false} />
        <SearchForm onSearchClick={this.onSearchHandler} />
        <SortPannel
          moviesCount={this.props.movies.length}
          onClickSortBy={this.onClickSortByHandler}
          sortBy={this.state.sortBy}
        />

        <InfiniteScroll
          dataLength={this.props.movies.length}
          next={() => this.fetchData(this.props.movies.length + 10, true)}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
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

export default HomePage;
