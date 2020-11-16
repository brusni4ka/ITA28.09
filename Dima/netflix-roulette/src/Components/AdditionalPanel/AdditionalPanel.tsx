import React from 'react'

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

interface IAdditionalPanelProps {
  films: IFilm[]
}

function AdditionalPanel({films}: IAdditionalPanelProps) {
  return(
    <div className="sort__wrapp">
      <div className="sort__wrapp__content">
        <p>Films by </p>
      </div>
    </div>
  )
}

export default AdditionalPanel