import { IMovie } from "../../types";
import { MovieAction} from "../actions/movieActios";
import {MovieActionTypes} from '../actions/actionTypes';


export interface IMovieDetailsState {
  movie: IMovie | undefined;
  moviesBySameGenre: IMovie[];
}


const initialState: IMovieDetailsState  = {
    movie: undefined,
    moviesBySameGenre: [],
}

const movieReducer = (state = initialState, action: MovieAction) => {
    switch(action.type){
        case MovieActionTypes.ON_INIT_MOVIE:{
            // let moviesData = movies;
            // const movie = moviesData.find((movie) => {
            //     return movie.id === Number(action.filmId);
            //   });
            //   const moviesBySameGenre = moviesData.filter((movieByGenre) => {
            //     return movie?.genre === movieByGenre.genre;
            //   });
            return {
                ...state,
                // movie: movie,
                // moviesBySameGenre: moviesBySameGenre
            }
        }

        case MovieActionTypes.ON_UPDATE_MOVIE:{
            // let moviesData = movies;
            // const movie = moviesData.find((movie) => {
            //     return movie.id === Number(action.id);
            //   });
              return {
                ...state,
                // movie
            }
        }
        default: return state;
    }
}

export default movieReducer;