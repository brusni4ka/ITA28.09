import React from 'react'
import { Link } from 'react-router-dom'
import FilmCard from './FilmCard'
import IFilmProps from '../../interfaces/IFIlmProps'

export default function Films({ films }: IFilmProps) {
  return(
    <div className="films-wrapp">
      <div className="films-wrapp__content">
        {films.map( film => {
          return (
            <Link to = { `/film/${film.id}`} key={ film.id }>
              <FilmCard
                film = { film }
              />
            </Link>
          )
          })
        }
      </div>
    </div>
  );
}