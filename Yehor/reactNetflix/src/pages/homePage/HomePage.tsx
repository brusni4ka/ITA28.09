import React, { useEffect } from "react";
import "./HomePage.css";
import Header from "../../components/header";
import SearchPanel from "../../components/search-panel";
import SortPanel from "../../components/sort-panel";
import MoviesList from "../../components/moviesList";
import Footer from "../../components/footer";
import ErrorBlock from "../../components/errorBlock";
import { RouteComponentProps } from "react-router-dom";
import { stringify, parse } from "query-string";
import {
  loadData,
  dataOffsetIncrement,
  dataOffsetDecrement
} from "../../redux/reducers/reducerMovies";
import { useDispatch, useSelector } from "react-redux";
import IReduxState from "../../interfaces/IReduxState";

const HomePage = (props: RouteComponentProps) => {

  const movies = useSelector((state: IReduxState) => state.movies.movies)
  const offset = useSelector((state: IReduxState) => state.movies.offset)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const queryUrl = parse(props.location.search) as {
      searchBy: string;
      search: string;
      sortBy: string;
    };
    const { sortBy, searchBy, search } = queryUrl;
    console.log(queryUrl);
    
    dispatch(loadData({
      sortBy: sortBy,
      searchBy: searchBy,
      search: search,
      offset: offset,
    }))
  }, [props.location, offset]);

  const handleSearchChange = ({

    search,
    searchBy,
  }: {
    search: string;
    searchBy: string;
  }) => {
    const query = stringify({ search, searchBy });
    props.history.push({
      pathname: "/search/",
      search: query,
    });
  };

  const handleSortChange = (sortBy: string) => {
    const querySrch = parse(props.location.search) as {
      searchby: string;
      search: string;
    };
    const query = stringify({ ...querySrch, sortBy });
    props.history.push({
      pathname: "/search/",
      search: query,
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="blur">
          <div className="top-container">
            <Header />
            <SearchPanel
              location={props.location}
              handleSearchChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <div className="sort-wrapper">
        <div className="top-container">
          <SortPanel
            location={props.location}
            moviesLength={movies.length}
            handlerSortChange={handleSortChange}
          />
        </div>
      </div>
      <div className="main-container">
        {movies.length === 0 ? (
          <ErrorBlock />
        ) : (
          <>
            <MoviesList movies={movies} />
            <div className="pagination">
              {offset === 0 ? null: <button onClick={() => dispatch(dataOffsetDecrement())}>Back</button>}
              <span className="pages">
                {offset ? offset / 9 + 1 : 1}
              </span>
              {movies.length < 9 ? null: <button onClick={() => dispatch(dataOffsetIncrement())}>Next</button>}
            </div>
          </>
        )}
      </div>
      <div className="wrapper-footer">
        <div className="main-container">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default HomePage;
