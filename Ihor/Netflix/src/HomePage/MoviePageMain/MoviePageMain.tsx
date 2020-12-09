import React, { useEffect } from "react";
import Header from "../header";
import { useHistory, useLocation } from "react-router-dom";
import Movies from "../../Shared/movie";
import SortPanel from "../sortPanel/sortPanel";
import Footer from "../../Shared/footer";
import SearchPanel from "../SearchPanel";
import "../../index.css";
import { parse, stringify } from "query-string";
import { useSelector,useDispatch } from 'react-redux';
import IRootState from '../../Interfaces/IRootState';



const MoviePageMain = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();


  const movies = useSelector((state: IRootState) => state.movies.movies);
  const offset = useSelector((state: IRootState) => state.movies.offset);
  const loading = useSelector((state: IRootState) => state.movies.loading);
  const error = useSelector((state: IRootState) => state.movies.error);
  const total = useSelector((state: IRootState) => state.movies.total);

  useEffect(() => {
    const queryUrl = parse(location.search) as {
      searchBy: string;
      search: string;
      sortBy: string;
    };
    const { sortBy, searchBy, search } = queryUrl;
    dispatch({
      type:"movies/moviesRequested",
      payload: {
        offset: offset,
        sortBy: sortBy,
        searchBy: searchBy,
        search: search,
      }
    })
  }, [location.search]);

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
    const query = stringify({ ...queryUrl, search, searchBy });
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
    const query = stringify({ ...queryUrl, sortBy });
    history.push({
      pathname: "/search",
      search: query,
    });
  };

  const increaseOffset = () => {
    const queryUrl = parse(location.search) as {
      searchBy: string;
      search: string;
      sortBy: string;
    };
    const { sortBy, searchBy, search } = queryUrl;
    if (movies.length < total) {

      dispatch({
        type:"movies/loadData",
        payload: {
        offset: offset + 10,
        sortBy: sortBy,
        searchBy: searchBy,
        search: search,
        }
      });
    }
  };

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
        {moviesCount < total ? (
          <button className="load_more" onClick={increaseOffset}>
            Load More
          </button>
        ) : (
          <div>NO MORE FILMS</div>
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MoviePageMain;
