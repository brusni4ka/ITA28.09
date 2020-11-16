import React, {lazy, Suspense} from "react"
import "./particular-film.scss"
import {withRouter, RouteComponentProps, Link} from "react-router-dom"


import CardMovie from "../../components/card-movie/card-movie.component"
import UserSelectedMovies from "../../components/user-selected-movies/userSelectedMovies.component"
import ButtonDefault from "../../components/buttonDefault/buttonDefault.component"

const FilmDetails= lazy(() => import("../../components/film-details/film-details"))

// import FilmDetails from "../../components/film-details/film-details"
 
interface IParticularFilmProps {
    movies?: [],
    number_of_films?: number
    moviesDefault?: []
    film: any
}

interface IProps extends RouteComponentProps<any> {
    title?: string;
    movies?: [],
    number_of_films?: number
    moviesDefault?: any
  }
  

class  ParticularFilm extends React.Component<IProps> { 
    state = {
        film: []
    }

    history = this.props.history
    location = this.props.location
    matchId = this.props.match.params.id 
 
    componentDidMount () {
            this.setState({
                film: this.props.moviesDefault.filter((filmId: any) => 
                filmId.id == this.matchId)
            })
       
    }
    
    // let { path, url } = useRouteMatch();

    handleRedirectToSearch  = () => {
        console.log("redirect to")
        // this.props.history.push("/");
    }
render () { 
    console.log(this.props.history);
    console.log(this.props.location);
    console.log(this.matchId);
    console.log(this.props.moviesDefault);
    console.log(this.state.film)
    const {movies, number_of_films, moviesDefault} = this.props
    return(
        <div className="particular__film-wrapper">
            <div className="particular__film-btn-wrapper">
                <Link  to="/">
                    <ButtonDefault 
                        className={`button__default button__default-redirect`} 
                        type="button" 
                        onClick={this.handleRedirectToSearch}>
                        search
                    </ButtonDefault>
                </Link>
            </div>
            <div className="particular__film-info">
            <Suspense fallback={<div>Загрузка...</div>}>
            <FilmDetails 
                id={this.matchId}
                film={this.state.film}
            />
            </Suspense>
                
                info about film
            </div>
            <div className="particular__film-by-genre">
                all genre from this film
            </div>
            <div className="particular__film-same-genre">
            particular__film-same-genre
            </div>
            {/* <CardMovie 
             key={moviesDefault.id} 
             title={title}
             release_date={release_date}/>
            <UserSelectedMovies 
              movies={movies}
              number_of_films={number_of_films}
              /> */}
            Film info
        </div>
    )
    }

}
       



export default  withRouter(ParticularFilm)