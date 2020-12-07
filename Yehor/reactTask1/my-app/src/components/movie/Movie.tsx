import React from 'react';
import './Movie.css';

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

function Movie({ movie }: IMovieProps) {
    return <div className="movie">
        <img src={movie.poster_path} alt={movie.title} />
        <div className="info">
            <div className="title-genres">
                <div className="title">{movie.title}</div>
                <div className="genres">{movie.genres.map(genre => <span key={movie.genres.indexOf(genre)}>{genre}</span>)}</div>
            </div>
            <div className="date">{movie.release_date.substr(0, 4)}</div>
        </div>
    </div>
}

export default Movie;