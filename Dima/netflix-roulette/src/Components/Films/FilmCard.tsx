import React from 'react';
import Image from '../../Shared/Images/Image'
import IFilm from '../../interfaces/IFilm'



function FilmCard({ film }: { film: IFilm }) {

  return (
    <div className='film__card'>
      <Image 
        filmImage = { film.poster_path }
        filmAlt = { film.title }
      />
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
