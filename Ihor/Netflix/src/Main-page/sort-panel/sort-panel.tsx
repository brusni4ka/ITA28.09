import React from 'react';
import './sort-panel.css';

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
  
  interface ISortPanelProps {
    movies:IFilm[];
  }

const SortPanel= ({movies}:ISortPanelProps) => {

    return (
        <div className="sort_panel">
           <p className="movies_found"><span>{movies.length}</span> movies found</p> 
           <div className="sort">
               <span className="sort_by">Sort by</span>
               <button className="sort_date">release date</button>
               <button className="sort_rating">rating</button>
           </div>
        </div>
    )
}

export default SortPanel;
