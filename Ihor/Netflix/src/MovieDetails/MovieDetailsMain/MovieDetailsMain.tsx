import React from 'react';
import { RouteComponentProps} from 'react-router-dom'
import MovieHeader from '../MovieHeader';
import MovieInfo from '../MovieInfo';
import SameGenrePanel from '../SameGenrePanel';
import SameGenreMovieCard from '../SameGenreMovieCard';
import Footer from '../../Shared/footer';
import './MovieDetailsMain.css';


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
  
  interface IMovies {
    films:IMovie[]
  }
  

  type MovieDetailsMainProps = IMovies & RouteComponentProps<{id: string}>
  

class MovieDetailsMain extends React.Component<MovieDetailsMainProps>{

    

    render() {
        const {films,match} = this.props;
        
        return (
            <>
            <div className="movie_heading">
                <MovieHeader/>
                {films.filter(item=>String(item.id)===match.params.id).map((film)=> <MovieInfo key = {film.id} {...film}/>)}
            </div>
            <SameGenrePanel/>
            <div className="movies">
                {films.map((film)=> <SameGenreMovieCard key = {film.id} {...film}/>)}
            </div>
            <Footer/>
            
            </>
        )
    }
}

export default MovieDetailsMain;

