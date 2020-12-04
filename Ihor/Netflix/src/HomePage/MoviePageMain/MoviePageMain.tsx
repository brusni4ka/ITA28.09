import React, { useEffect } from "react";
import Header from "../header";
import { RouteComponentProps, useHistory, useLocation } from "react-router-dom";
import Movies from "../../Shared/movie";
import SortPanel from "../sortPanel/sortPanel";
import Footer from "../../Shared/footer";
import SearchPanel from "../SearchPanel";
import "../../index.css";
import IMovie from "../../Interfaces/IMovie";
import { parse, stringify } from "query-string";
import { PropsFromRedux } from "./index";

interface IMoviePageProps {
  movies: IMovie[];
}

type MovieDetailsMainProps = IMoviePageProps &
  RouteComponentProps &
  PropsFromRedux;

const MoviePageMain = (props: MovieDetailsMainProps) => {
  let history = useHistory();
  let location = useLocation();

  const handleSearchChange = ({
    search,
    searchBy,
  }: {
    search: string;
    searchBy: string;
  }) => {
    const queryUrl = parse(location.search) as {
      sortBy: string;
      search: string;
      searchBy: string;
    };
    const { sortBy } = queryUrl;
    const query = stringify({ ...queryUrl, search, searchBy });
    props.moviesRequested({
      offset: props.offset,
      sortBy: sortBy,
      searchBy: searchBy,
      search: search,
    });
    history.push({
      pathname: "/search",
      search: query,
    });
  };

  const handleSortChange = (sortBy: string) => {
    const queryUrl = parse(location.search) as {
      searchBy: string;
      search: string;
    };
    const { searchBy, search } = queryUrl;
    const query = stringify({ ...queryUrl, sortBy });
    props.moviesRequested({
      offset: props.offset,
      sortBy: sortBy,
      searchBy: searchBy,
      search: search,
    });
    history.push({
      pathname: "/search",
      search: query,
    });
  };
  useEffect(() => {
    if (history.action !== "PUSH") {
      const queryUrl = parse(location.search) as {
        searchBy: string;
        search: string;
        sortBy: string;
      };
      const { sortBy, searchBy, search } = queryUrl;
      props.moviesRequested({
        offset: props.offset,
        sortBy: sortBy,
        searchBy: searchBy,
        search: search,
      });
    }
  }, [location.search]);

  const increaseOffset = () => {
    const queryUrl = parse(location.search) as {
      searchBy: string;
      search: string;
      sortBy: string;
    };
    const { sortBy, searchBy, search } = queryUrl;
    props.loadData({
      offset: props.offset + 10,
      sortBy: sortBy,
      searchBy: searchBy,
      search: search,
    });
  };

  const { movies, loading, error } = props;
  const moviesCount = movies.length;
  return (
    <div className="movieapp">
      <div className="heading">
        <Header />
        <SearchPanel handleSearchChange={handleSearchChange} />
      </div>
      <SortPanel
        moviesCount={moviesCount}
        handleSortChange={handleSortChange}
      />
      <div className="movies">
        <Movies movies={movies} loading={loading} error={error} />
      </div>
      <div className="load">
        <button className="load_more" onClick={increaseOffset}>
          Load More
        </button>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MoviePageMain;
