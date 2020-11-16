import React from 'react';

import './SameGenreMovieCard.css';

interface ISameMovieCardProps {
    id: number,
    title: string,
    tagline?: string,
    vote_average?: number,
    vote_count?: number,
    release_date: string,
    poster_path: string,
    overview?: string,
    budget?: number,
    revenue?: number,
    genres: string[],
    runtime?: number
}

const SameGenreMovieCard = ({title,poster_path,release_date,genres} : ISameMovieCardProps) => {
    
    return (
        <div className="movie_card">
            <img src={poster_path} alt={title} className="movie_card_img"/>
            <div className="movie_info">
                <h3 className="movie_title">{title}</h3>
                <p className="movie_date">{release_date.substring(0,4)}</p>
            </div>
                <p className="movie_genre">{genres.map((item: string)=> <span className="genre_item" key = {genres.indexOf(item)}>{item} </span>)}</p>
        </div>
    )
}

export default SameGenreMovieCard;