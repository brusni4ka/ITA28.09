import React from "react";
import Header from "../header";
import { RouteComponentProps } from "react-router-dom";
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
class MoviePageMain extends React.Component<MovieDetailsMainProps> {
  handleSearchChange = ({
    search,
    searchBy,
  }: {
    search: string;
    searchBy: string;
  }) => {
    const queryUrl = parse(this.props.location.search) as {
      sortBy: string;
      search: string;
      searchBy: string;
    };
    const { sortBy } = queryUrl;
    const query = stringify({ ...queryUrl, search, searchBy });
    this.props.MoviesRequested(sortBy, this.props.offset, searchBy, search);
    this.props.history.push({
      pathname: "/search/",
      search: query,
    });
  };

  handleSortChange = (sortBy: string) => {
    const queryUrl = parse(this.props.location.search) as {
      searchBy: string;
      search: string;
    };
    const { searchBy, search } = queryUrl;
    const query = stringify({ ...queryUrl, sortBy });
    this.props.MoviesRequested(sortBy, this.props.offset, searchBy, search);
    this.props.history.push({
      pathname: "/search/",
      search: query,
    });
  };

  componentDidMount() {
    const queryUrl = parse(this.props.location.search) as {
      searchBy: string;
      search: string;
      sortBy: string;
    };
    const { sortBy, searchBy, search } = queryUrl;
    this.props.MoviesRequested(sortBy, this.props.offset, searchBy, search);
  }

  componentDidUpdate = (prevProps: MovieDetailsMainProps) => {
    if (
      this.props.location !== prevProps.location &&
      this.props.history.action !== "PUSH"
    ) {
      const queryUrl = parse(this.props.location.search) as {
        searchBy: string;
        search: string;
        sortBy: string;
      };
      const { sortBy, searchBy, search } = queryUrl;
      this.props.MoviesRequested(sortBy, this.props.offset, searchBy, search);
    }
  };

  increaseOffset = () => { 
    this.props.loadData( this.props.offset + 10,this.props.sortBy);
  };

  render() {
    const { movies, loading, error } = this.props;
    const moviesCount = movies.length;
    return (
      <div className="movieapp">
        <div className="heading">
          <Header />
          <SearchPanel
            location={this.props.location}
            handleSearchChange={this.handleSearchChange}
          />
        </div>
        <SortPanel
          location={this.props.location}
          moviesCount={moviesCount}
          handleSortChange={this.handleSortChange}
        />
        <div className="movies">
          <Movies movies={movies} loading={loading} error={error} />
        </div>
        <div className="load">
          <button className="load_more" onClick={() => this.increaseOffset()}>
            Load More
          </button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MoviePageMain;
