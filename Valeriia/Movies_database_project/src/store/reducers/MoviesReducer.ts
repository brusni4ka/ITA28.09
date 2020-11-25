import { MoviesActionTypes, MoviesAction} from '../actions';
import {IMovie} from '../../types';
import movies from '../../movies.json';


export interface IMoviesState{
  movies: IMovie[] | [];
  isLoading: boolean;
  tempListOfMovies: IMovie[] | [];
  sortBy: string;
}

const initialState: IMoviesState = {
    movies: [],
    isLoading: false,
    tempListOfMovies: [],
    sortBy: "date"
}
 
const moviesReducer = (state = initialState, action: MoviesAction) => {
    switch(action.type){
        case MoviesActionTypes.ON_SEARCH:{
            const tempListOfMovies = movies.filter(
                (movieItem) => {
                    if(action.filterBy === "title"){
                        return movieItem.title === action.searchTerm
                    } else{
                       return movieItem.genre === action.searchTerm
                    }
                }
              );
            return {
                ...state,
                tempListOfMovies : tempListOfMovies
            }
        }

        case MoviesActionTypes.ON_INIT_PAGE:{
            const sortByType = action.sortBy ? action.sortBy : "date";
            const tempListOfMovies = movies.filter((movieItem: IMovie) => {
                if (action.filterBy && action.filterBy === "title") {
                  return movieItem.title === action.searchTerm;
                } else {
                  return movieItem.genre === action.searchTerm;
                }
              });
            
            return {
                ...state,
                movies: movies,
                sortBy: sortByType,
                tempListOfMovies: tempListOfMovies.length
                    ? tempListOfMovies
                    : movies.sort((a: IMovie, b: IMovie) => {
                        if (sortByType === "date") {
                        return b.date - a.date;
                        } else {
                        return b.vote_average - a.vote_average;
                        }
                    })
            }
        }

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

        case MoviesActionTypes.ON_SORT:{
            const tempListSortMovies = state.movies.sort((a, b) => {
                if(action.sortByType === "date"){
                    return b.date - a.date;
                } else{
                    return b.vote_average - a.vote_average;
                }
            });
            return {
                ...state,
                tempListOfMovies: tempListSortMovies,
                sortBy: action.sortByType
            }
        }
        
        default: return state;
    }
   
}

export default moviesReducer;