import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "../../components/SearchForm";
import SortPannel from "../../components/SortPannel";
import Movies from "../../components/Movies";
import { RouteComponentProps } from "react-router";
import { parse, stringify } from "query-string";
import Header from "../../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import { IRootState } from "../../index";
import { ON_REQUEST_MOVIES } from "../../store/actions/moviesAction";

const HomePage = (props: RouteComponentProps) => {
  const [sortType, setSortType] = useState("release_date");
  const movies = useSelector((state: IRootState) => state.movies.movies);
  const isLoading = useSelector((state: IRootState) => state.movies.isLoading);
  const isError = useSelector((state: IRootState) => state.movies.isError);
  const total = useSelector((state: IRootState) => state.movies.total);
  const dispatch = useDispatch();

  const fetchData = (offset: number = 0, isLazyLoading: boolean = false) => {
    const queryUrl = parse(props.location.search) as {
      filterBy: string;
      searchTerm: string;
      sortBy: string;
    };
    const { searchTerm, filterBy, sortBy } = queryUrl;
    const sortByType = sortBy ? sortBy : "release_date";
    dispatch({
      type: ON_REQUEST_MOVIES,
      payload: {
        sortByType,
        searchBy: filterBy,
        searchValue: searchTerm,
        offset,
        isLazyLoading,
      },
    });

    setSortType(sortByType);
  };

  const onSearchHandler = (searchTerm: string, filterBy: string): void => {
    const queryUrl = parse(props.location.search) as {
      searchTerm: string;
      filterBy: string;
      sortBy: string;
    };
    const { sortBy } = queryUrl;
    const sortByType = sortBy ? sortBy : sortType;
    const query = stringify({
      ...queryUrl,
      sortBy: sortByType,
      searchTerm,
      filterBy,
    });

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

    const query = stringify({ ...queryUrl, sortBy: sortByType });
    props.history.push({
      pathname: "/search/Search",
      search: query,
    });
    setSortType(sortByType);
  };

  useEffect(() => {
    fetchData();
  }, [props.location.search]);

  return (
    <>
      <Header isLinkToShow={false} />
      <SearchForm onSearchClick={onSearchHandler} />
      <SortPannel
        moviesCount={movies?.length}
        onClickSortBy={onClickSortByHandler}
        sortBy={sortType}
      />

      <InfiniteScroll
        dataLength={movies?.length}
        next={() => fetchData(movies?.length + 10, true)}
        hasMore={movies.length < total ? true : false}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      >
        <Movies movies={movies} isLoading={isLoading} isError={isError} />
      </InfiniteScroll>
    </>
  );
};

export default HomePage;
