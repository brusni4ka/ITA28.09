import React, { useEffect } from 'react';

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

function Home(props: PropsFromRouteAndRedux) {

  useEffect(() => {
    const URLData = parse(props.location.search) as { search: string, searchBy: string };
    const { searchBy, search, } = URLData
    props.filmsRequested(0, 'release_date', searchBy, search, false);
  }, []);
  useEffect(() => {
    const URLData = parse(props.location.search) as { 
      search: string, 
      searchBy: string, 
      sortBy: string 
    };
    const { search, searchBy, sortBy } = URLData
    props.filmsRequested(0, sortBy, searchBy, search, false);
  }, [props.location, props.history.action]);

  const handleSearchChangeForSearch = ( { search, searchBy }: { search: string, searchBy: string } ) => {
    const URLData = parse(props.location.search) as { sortBy: string, search: string, searchBy: string };
    const { sortBy } = URLData
    let requestData = stringify({ ...URLData, search, searchBy })
    props.filmsRequested(0, sortBy, searchBy, search)
    props.history.push({
      pathname: '/search',
      search: requestData
    });

  };

  const handleSearchChangeForSort = ({ sortBy }: { sortBy: string }) => {
    const URLData = parse(props.location.search) as { search: string, searchBy: string };
    const { searchBy, search } = URLData
    let requestData = stringify({ ...URLData, sortBy } )
    console.log(requestData)
    props.filmsRequested(0, sortBy, searchBy, search)
    props.history.push( {
      pathname: '/search',
      search: requestData
    });
  };

  const handlePagination = (offset: number, pagination: boolean = false) => {
    const URLData = parse(props.location.search) as { 
      sortBy: string, 
      searchBy: string, 
      search: string 
    };
    const { sortBy, searchBy, search } = URLData 
    props.filmsRequested(offset, sortBy, searchBy, search, pagination)
  }

  const { films } = props;
    return (
      <div className="main-wrapp">
        <div className="top">
          <div className="top__wrapp">
            <Header />
            <Search 
              handleSearchChange = { handleSearchChangeForSearch }
            />
          </div>
        </div>
        <Sort
          handleSearchChange = { handleSearchChangeForSort }
          numberOfFilms = { films.length }
        />
        <InfiniteScroll
          pageStart = { films.length }
          loadMore = { () => handlePagination(films.length + 10, true) }
          hasMore = { true || false }
          loader = { <div className="loader" key={0}>Loading ...</div> }
        >
          <Films 
            films = { films }
          />
        </InfiniteScroll>
        <Footer />
      </div>
    );
  };

export default connector(Home);