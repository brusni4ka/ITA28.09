import React from 'react'
import Films from '../../Components/Films/Films'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import Sort from '../../Components/Sort/Sort'
import Footer from '../../Components/Footer/Footer'
import { RouteComponentProps } from 'react-router-dom'
import { parse, stringify } from 'query-string'
import IFilmProps from '../../interfaces/IFIlmProps'
// please move to some interface file and reuse Done !!!!!!!!!!!!!!

type FilmDetails = IFilmProps & RouteComponentProps

export default class Home extends React.Component<FilmDetails> {
    //remove it from state. DONE!!!!!!!!!!!!!!!!!!

  handleSearchChangeForSearch = ( { search, searchBy }: {search: string, searchBy: string } ) => {
    const URLData = parse(this.props.location.search) as { search: string, searchBy: string };
    const newParams = stringify({ ...URLData, search, searchBy });
    this.props.history.push({
      pathname: "/",
      search: newParams
    });
  };

  handleSearchChangeForSort = ({ sortBy }: { sortBy: string }) => {
    const URLData = parse(this.props.location.search) as { sortBy: string };
    const newParams = stringify({ ...URLData, sortBy } );
    this.props.history.push( {
      pathname: "/",
      search: newParams
    } );
  };

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
          handleSearchChange = { this.handleSearchChangeForSort }
          numberOfFilms = { films.length }
        />
        <Films 
          films = { films }
        />
        <Footer />
      </div>
    );
  };
};
