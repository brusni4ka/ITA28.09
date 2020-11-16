import React from 'react'
import Header from '../../Components/Header/Header'
import Button from '../../Shared/Buttons/Button'
import FilmInfo from '../../Components/FilmInformation/FilmInformation'
import AdditionalPanel from '../../Components/AdditionalPanel/AdditionalPanel'
import Films from '../../Components/Films/Films'
import Footer from '../../Components/Footer/Footer'
import { Link, RouteComponentProps } from 'react-router-dom'

interface IFilm {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  genres: string[],
  runtime: number
}

interface IFilmPageProps {
  films: IFilm[],
}

type FilmDetails = IFilmPageProps & RouteComponentProps<{id: string}>

export default class FilmPage extends React.Component< FilmDetails> {
  render() {
    const { films,match } = this.props
    return(
      <div>
        <div className="first-screen">
          <div className="first-screen__wrapp">
            <Header />
            <Link to="/">
              <Button 
              buttonContent="Search" />
            </Link>
          </div>
          {films.filter((film) => String(film.id) === match.params.id).map(
            (film) => <FilmInfo key={ film.id } { ...film }/>
          )}
        </div>
        <AdditionalPanel 
          films={ films }
        />
        <Films 
          films={ films }
        />
        <Footer />
      </div>
    )
  }
}
