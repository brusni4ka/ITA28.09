import { MoviesAction} from '../actions/moviesAction';
import {MoviesActionTypes} from '../../store/actions/actionTypes';
import {IMovie} from '../../types';

export interface IMoviesState{
  movies: IMovie[] | [];
  isLoading: boolean;
  sortBy: string;
}

const initialState: IMoviesState = {
    movies: [],
    isLoading: false,
    sortBy: "date"
}
 
const moviesReducer = (state = initialState, action: MoviesAction) => {
    switch(action.type){
        case MoviesActionTypes.ON_REQUEST_MOVIES:{
            return {
                ...state,
                isLoading: true
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS:{
            return {
                ...state,
               movies: action.movies,
               isLoading: false
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_ERROR:{
            return {
                ...state,
                isLoading: false
            }
        }

        default: return state;
    }
   
}

export default moviesReducer;