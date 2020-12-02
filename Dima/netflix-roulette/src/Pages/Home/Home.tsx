import React from 'react';

import Films from '../../Components/Films/Films';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';
import Sort from '../../Components/Sort/Sort';
import Footer from '../../Components/Footer/Footer';

import { RouteComponentProps } from 'react-router-dom';
import { parse, stringify } from 'query-string';
import { filmsRequested } from 'redux/Actions/requestActions';
import { connect, ConnectedProps }from 'react-redux';

import InfiniteScroll from 'react-infinite-scroller';
import IFilm from 'interfaces/IFilm';

interface IRootState {
  films: {
    films: IFilm[]
  }
};
const mapStateToProps = (state: IRootState) => ({
  films: state.films.films
});
const mapDispatchToProps = {
  filmsRequested
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRouteAndRedux = ConnectedProps<typeof connector> & RouteComponentProps

class Home extends React.Component<PropsFromRouteAndRedux> {

  componentDidMount() {
    const URLData = parse(this.props.location.search) as { search: string, searchBy: string };
    const { searchBy, search, } = URLData
    this.props.filmsRequested(0, 'release_date', searchBy, search, false);
  };
  componentDidUpdate(prevProps: PropsFromRouteAndRedux) {
    if(this.props.location !== prevProps.location && this.props.history.action !== 'PUSH') {
      const URLData = parse(this.props.location.search) as { 
          search: string, 
          searchBy: string, 
          sortBy: string 
        };
        const { search, searchBy, sortBy } = URLData
        console.log(sortBy)
        this.props.filmsRequested(0, sortBy, searchBy, search, false);
    };
  };

  handleSearchChangeForSearch = ( { search, searchBy }: { search: string, searchBy: string } ) => {
    const URLData = parse(this.props.location.search) as { sortBy: string, search: string, searchBy: string };
    const { sortBy } = URLData
    let requestData = stringify({ ...URLData, search, searchBy })
    this.props.filmsRequested(0, sortBy, searchBy, search)
    this.props.history.push({
      pathname: '/search/',
      search: requestData
    });

  };

  handleSearchChangeForSort = ({ sortBy }: { sortBy: string }) => {
    const URLData = parse(this.props.location.search) as { search: string, searchBy: string };
    const { searchBy, search } = URLData
    let requestData = stringify({ ...URLData, sortBy } )
    console.log(requestData)
    this.props.filmsRequested(0, sortBy, searchBy, search)
    this.props.history.push( {
      pathname: '/search/',
      search: requestData
    });
  };

  handlePagination = (offset: number, pagination: boolean = false) => {
    const URLData = parse(this.props.location.search) as { 
      sortBy: string, 
      searchBy: string, 
      search: string 
    };
    const { sortBy, searchBy, search } = URLData 
    this.props.filmsRequested(offset, sortBy, searchBy, search, pagination)
  }

  render() {
    const { films } = this.props;
    return (
      <div className="main-wrapp">
        <div className="top">
          <div className="top__wrapp">
            <Header />
            <Search 
              location = { this.props.location }
              handleSearchChange = { this.handleSearchChangeForSearch }
            />
          </div>
        </div>
        <Sort
          location = { this.props.location }
          history = {this.props.history}
          handleSearchChange = { this.handleSearchChangeForSort }
          numberOfFilms = { films.length }
        />
        <InfiniteScroll
          pageStart={ films.length }
          loadMore={ () => this.handlePagination(films.length + 10, true) }
          hasMore={ true }
          loader={ <div className="loader" key={0}>Loading ...</div> }
        >
          <Films 
            films = { films }
          />
        </InfiniteScroll>
        <Footer />
      </div>
    );
  };
};

export default connector(Home);