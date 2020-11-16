import React from 'react';

import './MovieInfo.css';

interface IMovieProps {
    id: number,
    title: string,
    tagline?: string,
    vote_average: number,
    vote_count?: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget?: number,
    revenue?: number,
    genres: string[],
    runtime: number
}
  


class  MovieInfo extends React.Component<IMovieProps>  {

    // componentDidMount = () => {
    //     const filmId = this.props.match.params.id;
    //     let moviesData = film;
    //     const movie = moviesData.find((film:any) => {
    //       return movie.id === +filmId;
    //     });
    // }

    
    render(){
        const {poster_path,title,vote_average,genres,release_date,runtime,overview} = this.props;
        return (
            <div className="film_info">
                <img className="m_img" src = {poster_path} alt={title}/>
                    <div className="m_info">
                        <div className="main_info">
                            <h2 className="m_name">{title}</h2>
                            <span className="m_rating">{vote_average}</span>
                        </div>
                            <p className="m_genre">{genres.map((item: string)=> <span className="genre_item" key = {genres.indexOf(item)}>{item} </span>)}</p>
                            <div className="m_year_time">
                                <span className="m_year">{release_date.substring(0,4)}</span>
                                <span className="m_time"> {runtime}min</span>
                            </div>
                            <p className="m_overview">{overview}</p>
                    </div>
                    
            </div>
        )
    }
    
}

export default MovieInfo;