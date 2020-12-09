
import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Button from '../../Shared/Buttons/Button'
import FilmInfo from '../../Components/FilmInformation/FilmInformation'
import AdditionalPanel from '../../Components/AdditionalPanel/AdditionalPanel'
import Films from '../../Components/Films/Films'
import Footer from '../../Components/Footer/Footer'
// import IFilmProps from '../../interfaces/IFIlmProps'
import { Link, RouteComponentProps, useHistory } from 'react-router-dom'
import { currentFilmRequested, filmsRequested } from 'redux/Redusers/requestReduser'
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

function FilmPage (props: PropsFromRouteAndRedux) {

  const history = useHistory()

  useEffect(() => {
    props.currentFilmRequested({id: props.match.params.id})
  }, []);

  useEffect(() => {
    if(history.action === 'PUSH') {
      props.currentFilmRequested({id: props.match.params.id})
    }
  }, [props.match.params.id]);

  useEffect(() => {
    const search = currentFilm ? props.currentFilm.genres[0] : ''
    props.filmsRequested({offset: 0, sortBy: 'vote_average', searchBy: 'genre', search})
  }, [props.currentFilm])


  const handlePagination = (offset: number, pagination: boolean = false) => {
    console.log('Pagination')
    const search = currentFilm ? currentFilm.genres[0] : ''
    props.filmsRequested({offset, sortBy: 'vote_average', searchBy: 'genre', search, pagination})
  }
  const { currentFilm, films } = props;
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
          pageStart={ 1 }
          loadMore={ () => handlePagination(films.length + 10, true) }
          hasMore={ true }
          loader={ <div className="loader" key={0}>Loading ...</div> }
          initialLoad = { false }
        >
          <Films 
            films = { films }
          />
        </InfiniteScroll>
        <Footer />
      </div>
    );
  };

export default connector(FilmPage)
