import React from 'react';
import './DetailedMovie.css';

interface IMovieProps {
    movie: {
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
}


function DetailedMovie({ movie }: IMovieProps) {
    return (
        <div className="dmovie">
            <img className="dmovie_img" src={movie.poster_path} alt={movie.title} />
            <div className="dmovie_movieInfo">
                <div className="dmovie_title-rating">
                    <h1 className="dmovie_title">{movie.title}</h1>
                    <div className="dmovie_rating">{movie.vote_average}</div>
                </div>
                <p className="dmovie_tagline">{movie.tagline}</p>
                <div className="dmovie_date-runtime">
                    <span className="dmovie_date">{movie.release_date.substr(0, 4)}</span>
                    <span>{movie.runtime + ' min'}</span>
                </div>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default DetailedMovie;