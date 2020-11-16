import React from 'react';
import './Main.css';
import Movie from '../movie';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface IMovie {
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
    movies: IMovie[];
}


function Main({ movies }: IAppProps) {
    return (
        <main>
            {movies.map(movie => <Link to={`/DetailedPage/${movie.id}`}><Movie key={movie.id} movie={movie} /></Link> )}
        </main>
    )
}

export default Main;