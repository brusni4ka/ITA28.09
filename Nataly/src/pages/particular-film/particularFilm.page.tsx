import React, {lazy, Suspense, useState, useEffect} from "react"
import "./particular-film.scss"
import {withRouter, RouteComponentProps, Link,  useHistory , } from "react-router-dom"


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
  

const  ParticularFilm: React.FC<IProps> = (props) =>  { 
    
    const [film, setFilm] = useState([])

    const  history =  props.history
    const  location = props.location
    const  matchId = props.match.params.id 
 
    useEffect(() => {}, [])
    
    // let { path, url } = useRouteMatch();

    const  handleRedirectToSearch = (e: React.MouseEvent<Element, MouseEvent>) => {
        console.log("redirect to")
        history.push("/");
    }
 
    console.log(history);
    console.log(location);
    console.log(matchId);
    console.log(film)
    return(
        <div className="particular__film-wrapper">
            <div className="particular__film-btn-wrapper">
                <Link  to="/">
                    <ButtonDefault 
                        className={`button__default button__default-redirect`} 
                        type="button" 
                        onClick={handleRedirectToSearch}>
                        search
                    </ButtonDefault>
                </Link>
            </div>
            <div className="particular__film-info">
            <Suspense fallback={<div>Загрузка...</div>}>
                <FilmDetails 
                    id={matchId}
                    film={film}
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
             key={movies.id} 
             title={title}
             release_date={release_date}/>
            <UserSelectedMovies 
              movies={movies}
              /> */}
            Film info
        </div>
    )
}
       



export default  withRouter(ParticularFilm)