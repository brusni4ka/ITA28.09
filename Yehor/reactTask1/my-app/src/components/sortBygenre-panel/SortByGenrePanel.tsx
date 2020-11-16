import React from 'react';
import './SortByGenrePanel.css';
import { RouteComponentProps } from 'react-router-dom';

// interface IMovie {
//     id: number,
//     title: string,
//     tagline: string,
//     vote_average: number,
//     vote_count: number,
//     release_date: string,
//     poster_path: string,
//     overview: string,
//     budget: number,
//     revenue: number,
//     genres: string[],
//     runtime: number
// }

// interface IAppProps {
//     movies: IMovie[];
//     id: string
// }
// interface IidProps {
//     id: string
// }
// type SortByGenrePanelProps = IAppProps & RouteComponentProps<{ id: string }>

function SortByGenrePanel() {
    return (
        <div className="sort-panel">
            Sort by genre
        </div>

    )
}

export default SortByGenrePanel