import React from 'react'
import { Link } from 'react-router-dom'
import FilmCard from './FilmCard'


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
  genres: Array<string>,
  runtime: number
}

interface IHomeProps {
  films: IFilm[]
}

export default function Films({ films }: IHomeProps) {
  return(
    <div className="films__wrapp">
      <div className="films__wrapp__content">
        {films.map( film => {
          return (
            <Link to={`/film/${film.id}`} key={ film.id }>
              <FilmCard
                film={ film }
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}