import React from 'react';
import './SortPanel.css';

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

interface ISortPanelProps {
    movies: IMovie[];
}

function SortPanel({movies}: ISortPanelProps) {
    return (
        <div className="sort-panel">
            <div className="amount">{movies.length} movies found</div>
            <div className="sort">
                <p>Sort by</p>
                <button>release date</button>
                <button>rating</button>
            </div>
        </div>
    )
}

export default SortPanel