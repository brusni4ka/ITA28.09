import React, { Component, useEffect, useRef, useState } from "react";
import SearchForm from "../../components/SearchForm";
import SortPannel from "../../components/SortPannel";
import Movies from "../../components/Movies";
import { RouteComponentProps } from "react-router";
import { parse, stringify } from "query-string";
import Header from "../../components/Header";
import { MoviesConnectProps } from "./index";
import InfiniteScroll from "react-infinite-scroll-component";

type HomePageProps = MoviesConnectProps & RouteComponentProps;

const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const HomePage = (props: HomePageProps) => {
  const [sortType, setSortType] = useState("release_date");
  const [hasMore, setHasMore] = useState(false);
  const prevMoviesLength = usePrevious(props.movies.length);
  useEffect(() => {
    if (props.movies.length > prevMoviesLength!) {
      setHasMore(props.movies.length > prevMoviesLength!);
    }

    fetchData();
  }, [props.location, props.movies]);

  const fetchData = (offset: number = 0, isLazyLoading: boolean = false) => {
    const queryUrl = parse(props.location.search) as {
      filterBy: string;
      searchTerm: string;
      sortBy: string;
    };
    const { searchTerm, filterBy, sortBy } = queryUrl;
    const sortByType = sortBy ? sortBy : sortType;
    props.onRequestMovies(
      sortByType,
      filterBy,
      searchTerm,
      offset,
      isLazyLoading
    );
    setSortType(sortByType);
  };

  const onSearchHandler = (searchTerm: string, filterBy: string): void => {
    const queryUrl = parse(props.location.search) as {
      searchTerm: string;
      filterBy: string;
      sortBy: string;
    };
    const { sortBy } = queryUrl;
    const query = stringify({ ...queryUrl, searchTerm, filterBy });
    const sortByType = sortBy ? sortBy : sortType;
    props.onRequestMovies(sortByType, filterBy, searchTerm);
    props.history.push({
      pathname: "/search/Search",
      search: query,
    });
  };

  const onClickSortByHandler = (sortByType: string) => {
    const queryUrl = parse(props.location.search) as {
      filterBy: string;
      searchTerm: string;
    };
    const { filterBy, searchTerm } = queryUrl;
    const query = stringify({ ...queryUrl, sortBy: sortByType });
    props.history.push({
      pathname: "/search/Search",
      search: query,
    });
    setSortType(sortByType);
    props.onRequestMovies(sortByType, filterBy, searchTerm);
  };

  return (
    <>
      <Header isLinkToShow={false} />
      <SearchForm onSearchClick={onSearchHandler} />
      <SortPannel
        moviesCount={props.movies.length}
        onClickSortBy={onClickSortByHandler}
        sortBy={sortType}
      />

      <InfiniteScroll
        dataLength={props.movies.length}
        next={() => fetchData(props.movies.length + 10, true)}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      >
        <Movies
          movies={props.movies}
          isLoading={props.isLoading}
          isError={props.isError}
        />
      </InfiniteScroll>
    </>
  );
};

export default HomePage;
