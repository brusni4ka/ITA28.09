import React from 'react';
import IFilm from '../../interfaces/IFilm'

import defaultImg from '../../assets/default.jpg'



const FilmCard = ({ film }: { film: IFilm }) => {

  // const imageStyle: any = {
  //   backgroundImage: `url(${film.poster_path}), url(${defaultImg});`
  // }

  function handleImgError (e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const target = e.target as HTMLImageElement
    target.src = defaultImg
  } 

  return (
    <div className='film__card'>
      <img 
        // className = { imageStyle }
        onError = { handleImgError }
        src={ film.poster_path } 
        alt={ film.title }
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
