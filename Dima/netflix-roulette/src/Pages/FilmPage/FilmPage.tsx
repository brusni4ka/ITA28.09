import React from 'react'
import Header from '../../Components/Header/Header'
import Button from '../../Shared/Buttons/Button'
import FilmInfo from '../../Components/FilmInformation/FilmInformation'
import AdditionalPanel from '../../Components/AdditionalPanel/AdditionalPanel'
import Films from '../../Components/Films/Films'
import Footer from '../../Components/Footer/Footer'
// import IFilmProps from '../../interfaces/IFIlmProps'
import { Link, RouteComponentProps } from 'react-router-dom'
import { CurrentFilmRequested, FilmsRequested } from 'redux/Actions/requestActions'
import { connect, ConnectedProps } from 'react-redux'
import IFilm from 'interfaces/IFilm'

interface IRootState {
  films: any,
  currentFilm: IFilm,
  id: string
};
const mapStateToProps = (state: IRootState) => ({
  films: state.films.films,
  currentFilm: state.films.currentFilm,
  id: state.id
});
const mapDispatchToProps = {
  CurrentFilmRequested,
  FilmsRequested,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRouteAndRedux = ConnectedProps<typeof connector> & RouteComponentProps<{ id: string }>


class FilmPage extends React.Component<PropsFromRouteAndRedux> {
  componentDidMount() {
    this.props.CurrentFilmRequested(this.props.match.params.id);
    // const requestData = `search=genre&filter=${this.props.currentFilm.genres[0]}`
    // this.props.FilmsRequested(requestData)
  };
  componentDidUpdate(prevProps: PropsFromRouteAndRedux) {
    const requestData = `search=genre&filter=${this.props.currentFilm.genres[0]}`
    this.props.match.params.id !== prevProps.match.params.id 
      && this.props.CurrentFilmRequested(this.props.match.params.id) 
        && this.props.FilmsRequested(requestData)
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
              buttonContent = "Search" />
            </Link>
          </div>
          {currentFilm && <FilmInfo film = { currentFilm } />}
        </div>
        <AdditionalPanel 
          genre = { String(genre) }
        />
        <Films 
          films = { films }
        />
        <Footer />
      </div>
    );
  };
};

export default connector(FilmPage)
