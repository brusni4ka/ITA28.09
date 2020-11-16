import React from 'react';


const FilmCard = ({ film }: any) => {
  return (
    <div className='film__card'>
      <img src={film.poster_path} alt={film.title} />
      <div className='film__card__information'>
        <h3>{film.title}</h3>
        <p>
          {film.genres.map((genre: string) => (
            <span className='film__card__genre' key={film.genres.indexOf(genre)}>
              {genre}
            </span>
          ))}
        </p>
        <p>{film.release_date.substring(0, 4)}</p>
      </div>
    </div>
  );
};

export default FilmCard;
