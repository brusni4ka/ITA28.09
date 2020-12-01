import { MoviesAction} from '../actions/moviesAction';
import {MoviesActionTypes} from '../../store/actions/actionTypes';
import {IMovie} from '../../types';

export interface IMoviesState{
  movies: IMovie[] | [];
  isLoading: boolean;
  isError: boolean;
}

const initialState: IMoviesState = {
    movies: [],
    isLoading: false,
    isError: false,
}
 
const moviesReducer = (state = initialState, action: MoviesAction) => {
    switch(action.type){
        case MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS:{
            return {
                ...state,
               movies: action.movies,
               isLoading: false
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_WITH_LAZY_LOADING:{
            return {
                ...state,
               movies: [...state.movies, ...action.movies],
               isLoading: false
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_ERROR:{
            return {
                ...state,
                isLoading: false,
                isError: action.error
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES:{
            return {
                ...state,
                isLoading: true
            }
        }

        default: return state;
    }
   
}

export default moviesReducer;