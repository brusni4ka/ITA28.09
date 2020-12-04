import { IMovie } from "../../types";
import { MovieAction} from "../actions/movieActions";
import {MovieActionTypes} from '../actions/actionTypes';

export interface IMovieDetailsState {
  movie: IMovie | null;
  isError: boolean
}

const initialState: IMovieDetailsState  = {
    movie: null,
    isError: false
}

const movieReducer = (state: IMovieDetailsState = initialState, action: MovieAction) => {
    switch(action.type){
        case MovieActionTypes.ON_REQUEST_MOVIE:{
            return {
                ...state,
            }
        }

        case MovieActionTypes.ON_REQUEST_MOVIE_SUCCESS:{
            return {
                ...state,
               movie: action.movie,
            }
        }

        case MovieActionTypes.ON_REQUEST_MOVIE_ERROR:{
            return {
                ...state,
                isError: action.error
            }
        }

        default: return state;
    }
}

export default movieReducer;