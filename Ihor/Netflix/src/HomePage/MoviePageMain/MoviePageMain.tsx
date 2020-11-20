import React from "react";
import Header from "../header";
import { RouteComponentProps } from "react-router-dom";
import Movie from "../../Shared/movie";
import SortPanel from "../sortPanel/sortPanel";
import Footer from "../../Shared/footer";
import SearchPanel from "../SearchPanel";
import "../../index.css";
import IMovie from "../../Interfaces/IMovie";
import { parse, stringify } from "query-string";

interface IMoviePageProps {
  movies: IMovie[];
}

type MovieDetailsMainProps = IMoviePageProps & RouteComponentProps;

class MoviePageMain extends React.Component<MovieDetailsMainProps> {
  handleSearchChange = ({
    search,
    searchBy,
  }: {
    search: string;
    searchBy: string;
  }) => {
    const query = stringify({ search, searchBy });
    this.props.history.push({
      pathname: "/",
      search: query,
    });
  };

  handleSortChange = ({ sortBy }: { sortBy: string }) => {
    const queryUrl = parse(this.props.location.search) as {
      searchBy: string;
      search: string;
    };
    const query = stringify({ ...queryUrl, sortBy });
    this.props.history.push({
      pathname: "/",
      search: query,
    });
  };

  render() {
    const { movies } = this.props;
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
          <Movie movies={movies} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MoviePageMain;
