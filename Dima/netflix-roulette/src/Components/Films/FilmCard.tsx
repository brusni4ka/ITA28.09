import React from 'react';
import IFilm from '../../interfaces/IFilm'


const FilmCard = ({ film }: { film: IFilm }) => {
  return (
    <div className='film__card'>
      <img src = { film.poster_path } alt = { film.title } />
      <div className='film__card__information'>
        <h3>{ film.title }</h3>
        <p>
          {film.genres.map((genre: string, index: number) => (
            <span className='film__card__genre' key = { index }>
              {genre}
            </span>
            )
          )};
        </p>
        <p>{ film.release_date.substring(0, 4) }</p>
      </div>
    </div>
  );
};

export default FilmCard
