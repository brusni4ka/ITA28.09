
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
  const history = useHistory();
  const location = useLocation();
  
  const fetchMovies =(sortBy:string,searchBy:string,search:string)=> props.moviesRequested({ offset: props.offset,sortBy: sortBy,searchBy: searchBy,search: search});

 

  useEffect(() => {
      const queryUrl = parse(location.search) as {
        searchBy: string;
        search: string;
        sortBy: string;
      };
      const { sortBy, searchBy, search } = queryUrl;
      fetchMovies(sortBy,searchBy,search);
    }, [location.search,history.action]);



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
    const query = stringify({ ...queryUrl, search, searchBy })
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
    if(props.offset < 3000){
      props.loadData({
        offset: props.offset + 10,
        sortBy: sortBy,
        searchBy: searchBy,
        search: search,
      });
    }
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
      {props.offset < 3000 ? <button className="load_more" onClick={increaseOffset}>
          Load More
        </button> : <div>NO MORE FILMS</div>}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};


export default MoviePageMain;
