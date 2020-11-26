import { MoviesAction} from '../actions/moviesAction';
import {MoviesActionTypes} from '../../store/actions/actionTypes';
import {IMovie} from '../../types';



export interface IMoviesState{
  movies: IMovie[] | [];
  isLoading: boolean;
//   tempListOfMovies: IMovie[] | [];
  sortBy: string;
}

const initialState: IMoviesState = {
    movies: [],
    isLoading: false,
    sortBy: "date"
}
 
const moviesReducer = (state = initialState, action: MoviesAction) => {
    switch(action.type){
        case MoviesActionTypes.ON_START_LOADING:{
            return {
                ...state,
                isLoading: true
            }
        }

        case MoviesActionTypes.ON_END_LOADING:{
            return {
                ...state,
                isLoading: false
            }
        }

        // case MoviesActionTypes.ON_SORT:{
        //     const tempListSortMovies = state.movies.sort((a, b) => {
        //         if(action.sortByType === "date"){
        //             return b.date - a.date;
        //         } else{
        //             return b.vote_average - a.vote_average;
        //         }
        //     });
        //     return {
        //         ...state,
        //         tempListOfMovies: tempListSortMovies,
        //         sortBy: action.sortByType
        //     }
        // }

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

        case MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE:{
            return {
                ...state,
                isLoading: true
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE_SUCCESS:{
            return {
                ...state,
               movies: action.movies
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE_ERROR:{
            return {
                ...state,
                isLoading: false
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE:{
            return {
                ...state,
                isLoading: true
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE_SUCCESS:{
            return {
                ...state,
               movies: action.movies
            }
        }

        case MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE_ERROR:{
            return {
                ...state,
                isLoading: false
            }
        }

        
        default: return state;
    }
   
}

export default moviesReducer;