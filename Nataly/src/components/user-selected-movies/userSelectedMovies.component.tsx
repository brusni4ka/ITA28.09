import React from "react"
import "./user-selected-movies.styles.scss"

import { IMoviesDefault } from "../../interfaces/interfaces"
import CardMovie from "../card-movie/card-movie.component"
import ErrorEmptyResults from "../error-empty-results/error-empty-results.component"

import {IUserSelectedMoviesProps} from "../../interfaces/interfaces"



const UserSelectedMovies  = (props: IUserSelectedMoviesProps) => (
    <div className="user__selected__movie">
        {
           props.number_of_films !== 0 
           ? 
           <div className="preview__movies-card-wrapper">
           {
           props.movies
           .map(({id, genres, title, release_date, ...item} : IMoviesDefault) => <CardMovie
           key={id} 
           genres={genres}
           title={title}
           release_date={release_date}
           {...item}
           /> )
           }
       </div> 
       : 
         <ErrorEmptyResults
            number_of_films={props.number_of_films}
          />

        }
    </div>
)

export default UserSelectedMovies