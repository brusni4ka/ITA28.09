import React from 'react'
import Header from '../../Components/Header/Header'
import Button from '../../Shared/Buttons/Button'
import FilmInfo from '../../Components/FilmInformation/FilmInformation'
import AdditionalPanel from '../../Components/AdditionalPanel/AdditionalPanel'
import Films from '../../Components/Films/Films'
import Footer from '../../Components/Footer/Footer'
import IFilmProps from '../../interfaces/IFIlmProps'
import { Link, RouteComponentProps } from 'react-router-dom'


type FilmDetails = IFilmProps & RouteComponentProps<{id: string}>

export default class FilmPage extends React.Component<FilmDetails> {
  render() {
    const { films, match } = this.props;
    const currentFilm = films.find(film => String(film.id) === match.params.id);
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
          {/* use find instead DONE!!!!!?????*/}
          {currentFilm ? <FilmInfo film = { currentFilm } /> : <div></div>}
        </div>
        <AdditionalPanel 
          genre = { currentFilm ? currentFilm.genres : '' }
        />
        <Films 
          films = { films }
        />
        <Footer />
      </div>
    );
  };
};
