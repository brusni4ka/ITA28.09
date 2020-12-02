import React from "react"
import "./user-selected-movies.styles.scss"

import { IMoviesDefault } from "../../interfaces/interfaces"
import CardMovie from "../card-movie/card-movie.component"
import ErrorEmptyResults from "../error-empty-results/error-empty-results.component"


export interface IUserSelectedMoviesProps {
  moviesDefault: IMoviesDefault[]
}

const UserSelectedMovies  = (props: IUserSelectedMoviesProps) => (
    <div className="user__selected__movie">
        {
           props.moviesDefault.length !== 0  

          ? 
          <div className="preview__movies-card-wrapper">
           {
            props.moviesDefault
            .map(({
              id, 
              genres, 
              title, 
              release_date, 
              ...item}) => <CardMovie
            key={id} 
            genres={genres}
            title={title}
            release_date={release_date}
            {...item}
            /> )
            }
          </div> 

          : 

         <ErrorEmptyResults/>
        }
    </div>
)

export default UserSelectedMovies