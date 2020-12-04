import React from 'react'
import Header from '../../Components/Header/Header'
import Button from '../../Shared/Buttons/Button'
import FilmInfo from '../../Components/FilmInformation/FilmInformation'
import AdditionalPanel from '../../Components/AdditionalPanel/AdditionalPanel'
import Films from '../../Components/Films/Films'
import Footer from '../../Components/Footer/Footer'
// import IFilmProps from '../../interfaces/IFIlmProps'
import { Link, RouteComponentProps } from 'react-router-dom'
import { currentFilmRequested, filmsRequested } from 'redux/Actions/requestActions'
import { connect, ConnectedProps } from 'react-redux'
import { parse } from 'query-string'
import InfiniteScroll from 'react-infinite-scroller'
import { IRootState } from 'interfaces/IRootState'

const mapStateToProps = (state: IRootState) => ({
  films: state.films.films,
  currentFilm: state.films.currentFilm,
  id: state.id
});
const mapDispatchToProps = {
  currentFilmRequested,
  filmsRequested,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRouteAndRedux = ConnectedProps<typeof connector> & RouteComponentProps<{ id: string }>


class FilmPage extends React.Component<PropsFromRouteAndRedux> {

  componentDidMount() {
    this.props.currentFilmRequested(this.props.match.params.id) 
  };
  
  componentDidUpdate(prevProps: PropsFromRouteAndRedux) {
    if(this.props.currentFilm !== prevProps.currentFilm) {
      const search = this.props.currentFilm.genres[0]
      console.log(search)
      this.props.filmsRequested(0, 'vote_average', 'genre', search)
    }
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.currentFilmRequested(this.props.match.params.id) 
    }
  }

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
    const { currentFilm, films } = this.props;
    const genre = currentFilm && currentFilm.genres[0]
    return(
      <div>
        <div className="first-screen">
          <div className="first-screen__wrapp">
            <Header />
            <Link to="/">
              <Button 
                isActive = { true }
                buttonContent = "Search" 
              />
            </Link>
          </div>
          {currentFilm && <FilmInfo film = { currentFilm } />}
        </div>
        <AdditionalPanel 
          genre = { String(genre) }
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

export default connector(FilmPage)
