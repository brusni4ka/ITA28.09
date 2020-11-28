import React from 'react'
import Films from '../../Components/Films/Films'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import Sort from '../../Components/Sort/Sort'
import Footer from '../../Components/Footer/Footer'
import { RouteComponentProps } from 'react-router-dom'
import { parse, stringify } from 'query-string'
// import IFilmProps from '../../interfaces/IFIlmProps'
import { FilmsRequested, IFilmsRequested } from 'redux/Actions/requestActions'
import { connect, ConnectedProps } from 'react-redux'
import IFilm from 'interfaces/IFilm'

interface IRootState {
  films: any //i need help here((((
};
const mapStateToProps = (state: IRootState) => ({
  films: state.films.films
});
const mapDispatchToProps = {
  FilmsRequested
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRouteAndRedux = ConnectedProps<typeof connector> & RouteComponentProps

class Home extends React.Component<PropsFromRouteAndRedux> {

  componentDidMount() {
    const URLData = parse(this.props.location.search) as { search: string, searchBy: string, sortBy: string };
    const { search, searchBy, sortBy } = URLData
    this.props.FilmsRequested(sortBy, searchBy, search);
  };
  componentDidUpdate(prevProps: PropsFromRouteAndRedux) {
    if(this.props.location !== prevProps.location) {
      const URLData = parse(this.props.location.search) as { 
          search: string, 
          searchBy: string, 
          sortBy: string 
        };
        const { search, searchBy, sortBy } = URLData
        this.props.FilmsRequested(sortBy, searchBy, search);
    };
  };

  handleSearchChangeForSearch = ( { search, searchBy }: { search: string, searchBy: string } ) => {
    const URLData = parse(this.props.location.search) as { sortBy: string, search: string, searchBy: string };
    const { sortBy } = URLData
    let requestData = stringify({ ...URLData, search, searchBy })
    this.props.FilmsRequested(sortBy, searchBy, search)
    this.props.history.push({
      pathname: "/",
      search: requestData
    });

  };

  handleSearchChangeForSort = ({ sortBy }: { sortBy: string }) => {
    const URLData = parse(this.props.location.search) as { search: string, searchBy: string };
    const { searchBy, search } = URLData
    let requestData = stringify({ ...URLData, sortBy } );
    this.props.FilmsRequested(sortBy, searchBy, search)
    this.props.history.push( {
      pathname: "/",
      search: requestData
    });
    this.props.FilmsRequested(requestData);
  };

  // handlePgination = ( offset: number ) => {
  //   const requestData = `offset=${offset}`
  // }

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
          // handlePagination = { this.handlePgination }
        />
        <Footer />
      </div>
    );
  };
};

export default connector(Home);