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

interface IRootState {
  films: any
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
    const requestData = stringify({...URLData})
    if(requestData) {
      this.props.FilmsRequested(requestData);
    } else {
      this.props.FilmsRequested(`sortBy=release_date`)
    }
  };
  componentDidUpdate(prevProps: PropsFromRouteAndRedux) {
    if(this.props.location !== prevProps.location) {
      const URLData = parse(this.props.location.search) as { 
          search: string, 
          searchBy: string, 
          sortBy: string 
        };
      const requestData = stringify({ ...URLData });
      this.props.FilmsRequested(requestData);
    };
  };

  handleSearchChangeForSearch = ( { search, searchBy }: { search: string, searchBy: string } ) => {
    const URLData = parse(this.props.location.search) as { sortBy: string };
    let requestData = stringify({ ...URLData, search, searchBy })
    if(searchBy === 'genre' && search) {
      requestData = `searchBy=${searchBy}&filter=${search}`
      this.props.FilmsRequested(requestData);
    } else if(searchBy === 'title' && search){
      requestData = `searchBy=${searchBy}&search=${search}`
    } else {
      return requestData
    }
    this.props.history.push({
      pathname: "/",
      search: requestData
    });
  };

  handleSearchChangeForSort = ({ sortBy }: { sortBy: string }) => {
    const URLData = parse(this.props.location.search) as { sortBy: string };
    let requestData = stringify({ ...URLData, sortBy } );
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