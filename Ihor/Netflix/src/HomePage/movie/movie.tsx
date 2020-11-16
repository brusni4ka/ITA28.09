import React from 'react';
import './movie.css';


import MovieCard from '../movie-card';
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
  
  interface IAppProps {
    movies:IFilm[],

  }

function Movie({ movies }:IAppProps) {

    return (
        <>
        {movies.map((film)=> <MovieCard key = {film.id}
        film = {film}/>)}
        </>
    )
}

export default Movie;