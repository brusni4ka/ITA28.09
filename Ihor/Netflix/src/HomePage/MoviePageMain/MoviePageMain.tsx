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
import { MoviesRequested } from "../../redux/Actions/FetchActions";
import { connect, ConnectedProps } from "react-redux";

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
    this.props.MoviesRequested(sortBy, searchBy, search);
    this.props.history.push({
      pathname: "/",
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
    this.props.MoviesRequested(sortBy, searchBy, search);
    this.props.history.push({
      pathname: "/",
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
    this.props.MoviesRequested(sortBy, searchBy, search);
  }

  componentDidUpdate = (prevProps: RouteComponentProps) => {
    if (this.props.location !== prevProps.location) {
      const queryUrl = parse(this.props.location.search) as {
        searchBy: string;
        search: string;
        sortBy: string;
      };
      const { sortBy, searchBy, search } = queryUrl;
      this.props.MoviesRequested(sortBy, searchBy, search);
    }
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
          <Movies movies={movies} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
interface IRootState {
  movies: any;
  sortBy: string;
}

const mapStateToProps = (state: IRootState) => ({
  movies: state.movies.movies,
  sortBy: state.movies.sortBy,
});

const mapDispatchToProps = {
  MoviesRequested,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MoviePageMain);
