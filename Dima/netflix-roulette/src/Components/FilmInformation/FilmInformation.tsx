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


const FilmInfo = ({ poster_path, title, tagline, release_date, runtime, overview }: IFilm) => {
  return(
    <div className="first-screen__film-information" >
      <img src={ poster_path } />
      <div className="first-screen__film-information__details" >
        <h2>{ title }</h2>
        <p>{ tagline }</p>
        <div>
          <p>{ release_date }</p>
          <p>{ runtime } min</p>
        </div>
        <p>{ overview }</p>
      </div>
    </div>
  )
}

export default FilmInfo