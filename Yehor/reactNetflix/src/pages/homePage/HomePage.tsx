import React from "react";
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
  LoadData,
  ReceivedData,
  ILoadData,
} from "../../redux/actions/moviesActions";
import { connect, ConnectedProps } from "react-redux";

interface RootState {
  movies: any;
}

const mapStateToProps = (state: RootState) => {
  console.log(state);

  return {
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = {
  LoadData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & RouteComponentProps;

class HomePage extends React.Component<PropsFromRedux, {}> {
  componentDidMount() {
    const queryUrl = parse(this.props.location.search) as {
      searchBy: string;
      search: string;
      sortBy: string;
    };
    const { sortBy, searchBy, search } = queryUrl;
    this.props.LoadData("movie is loading", sortBy, searchBy, search);
  }

  componentDidUpdate = (prevProps: RouteComponentProps) => {
    if (this.props.location !== prevProps.location) {
      const queryUrl = parse(this.props.location.search) as {
        searchBy: string;
        search: string;
        sortBy: string;
      };
      const { sortBy, searchBy, search } = queryUrl;
      this.props.LoadData("movie is loading", sortBy, searchBy, search);
    }
  };

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

  handleSortChange = (sortBy: string) => {
    const querySrch = parse(this.props.location.search) as {
      searchby: string;
      search: string;
    };
    const query = stringify({ ...querySrch, sortBy });
    this.props.history.push({
      pathname: "/",
      search: query,
    });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="blur">
            <div className="top-container">
              <Header />
              <SearchPanel
                location={this.props.location}
                handleSearchChange={this.handleSearchChange}
              />
            </div>
          </div>
        </div>
        <div className="sort-wrapper">
          <div className="top-container">
            <SortPanel
              location={this.props.location}
              moviesLength={this.props.movies.length}
              handlerSortChange={this.handleSortChange}
            />
          </div>
        </div>
        <div className="main-container">
          <MoviesList movies={this.props.movies} />
        </div>
        {/* <ErrorBlock /> */}
        <div className="wrapper-footer">
          <div className="main-container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
export default connector(HomePage);

