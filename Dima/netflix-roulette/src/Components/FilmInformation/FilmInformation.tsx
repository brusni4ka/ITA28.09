import React from 'react'
import IFilm from '../../interfaces/IFilm'
import Image from '../../Shared/Images/Image'
interface IFilmInfo {
  film: IFilm
};

const FilmInfo = ({ film }: IFilmInfo) => {
  return(
    <div className="first-screen__film-information" >
      <Image 
        filmImage = { film.poster_path }
        filmAlt = { film.title }
      />
      <div className="first-screen__film-information__details" >
        <h2>{ film.title }</h2>
        <p>{ film.tagline }</p>
        <div>
          <p>{ film.release_date }</p>
          <p>{ film.runtime } min</p>
        </div>
        <p>{ film.overview }</p>
      </div>
    </div>
  );
};

export default FilmInfo