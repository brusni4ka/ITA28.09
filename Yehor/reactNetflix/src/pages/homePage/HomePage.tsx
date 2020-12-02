import React from "react";
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
  LoadData,
  DataOffsetIncrement,
  DataOffsetDecrement,
  ReceivedDataMore,
  ReceivedData,
  ILoadData,
} from "../../redux/actions/moviesActions";
import { connect, ConnectedProps } from "react-redux";
import IMovie from "../../interfaces/IMovie"

interface IRootState {
  movies: {
    status: string,
    movies: IMovie[],
    offset: number
  },
  movie: {
    status: string,
    movie: IMovie,
    id: string
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    movies: state.movies.movies,
    offset: state.movies.offset
  };
};

const mapDispatchToProps = {
  LoadData,
  DataOffsetIncrement,
  DataOffsetDecrement,
  ReceivedDataMore
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
    let { sortBy, searchBy, search } = queryUrl;
    this.props.LoadData("movie is loading", sortBy, searchBy, search, this.props.offset);
  }

  componentDidUpdate = (prevProps: PropsFromRedux) => {
    if (this.props.location !== prevProps.location  || this.props.offset !== prevProps.offset) {
      const queryUrl = parse(this.props.location.search) as {
        searchBy: string;
        search: string;
        sortBy: string;
      };
      const { sortBy, searchBy, search } = queryUrl;
      this.props.LoadData("movie is loading", sortBy, searchBy, search, this.props.offset);
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
      pathname: "/search/",
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
      pathname: "/search/",
      search: query,
    });
  };

  render() {
    console.log(this.props.offset)
    
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
        {this.props.movies.length === 0 ? <ErrorBlock />: 
        <>
          <MoviesList movies={this.props.movies} />
          <div className="pagination">
            <button onClick={this.props.DataOffsetDecrement}>Back</button>
              <span className="pages">{this.props.offset? this.props.offset / 9 + 1: 1}</span>
            <button onClick={this.props.DataOffsetIncrement}>Next</button>
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
}
export default connector(HomePage);

