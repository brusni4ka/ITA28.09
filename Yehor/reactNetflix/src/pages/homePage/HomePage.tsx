import React, { useEffect } from "react";
import "./HomePage.css"
import Header from "../../components/header";
import SearchPanel from "../../components/search-panel";
import SortPanel from "../../components/sort-panel";
import MoviesList from "../../components/moviesList";
import Footer from "../../components/footer";
import ErrorBlock from "../../components/errorBlock";
import { RouteComponentProps } from "react-router-dom";
import { stringify, parse } from "query-string";
import IMovies from "../../interfaces/IMovies";
import {
  loadData,
  dataOffsetIncrement,
  dataOffsetDecrement
} from "../../redux/reducers/reducerMovies"

import { connect, ConnectedProps } from "react-redux";
import IReduxState from "../../interfaces/IReduxState"

const mapStateToProps = (state: IReduxState) => {
  return {
    movies: state.movies.movies,
    offset: state.movies.offset
  };
};

const mapDispatchToProps = {
  loadData,
  dataOffsetIncrement,
  dataOffsetDecrement
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & RouteComponentProps;

const HomePage =(props: PropsFromRedux) => {

  // useEffect(() => {
  //   const queryUrl = parse(props.location.search) as {
  //     searchBy: string;
  //     search: string;
  //     sortBy: string;
  //   };
  //   let { sortBy, searchBy, search } = queryUrl;
  //   props.loadData("movie is loading", sortBy, searchBy, search, props.offset);
  // }, [])

  useEffect(() => {
    const queryUrl = parse(props.location.search) as {
            searchBy: string;
            search: string;
            sortBy: string;
          };
          const { sortBy, searchBy, search } = queryUrl;
          props.loadData({sortBy: sortBy, searchBy:  searchBy, search:  search, offset: props.offset});
  }, [props.location, props.offset])


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
              moviesLength={props.movies.length}
              handlerSortChange={handleSortChange}
            />
          </div>
        </div>
        <div className="main-container">
        {props.movies.length === 0 ? <ErrorBlock />: 
        <>
          <MoviesList movies={props.movies} />
          <div className="pagination">
            <button onClick={props.dataOffsetDecrement}>Back</button>
              <span className="pages">{props.offset? props.offset / 9 + 1: 1}</span>
            <button onClick={props.dataOffsetIncrement}>Next</button>
        </div>
        </>
        }
        </div>
        <div className="wrapper-footer">
          <div className="main-container">
            <Footer />
          </div>
        </div>
      </>
    );
}
export default connector(HomePage);

