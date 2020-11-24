import { MoviesActionTypes, MoviesAction} from '../actions';
import {IMovie} from '../../types';

interface IMoviesState{
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
 
const reducer = (state = initialState, action: MoviesAction) => {
    switch(action.type){
        case MoviesActionTypes.ON_SEARCH:{
            const tempListOfMovies = state.movies.filter(
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
                movies : tempListOfMovies
            }
        }
        case MoviesActionTypes.ON_INIT_PAGE:{
            const sortByType = state.sortBy ? state.sortBy : "date";
            const tempListOfMovies = state.movies.filter((movieItem: IMovie) => {
                if (action.filterBy && action.filterBy === "title") {
                  return movieItem.title === action.searchTerm;
                } else {
                  return movieItem.genre === action.searchTerm;
                }
              });
            
            return {
                ...state,
                movies: state.movies,
                sortBy: sortByType,
                tempListOfMovies: tempListOfMovies.length
                    ? tempListOfMovies
                    : state.movies.sort((a: IMovie, b: IMovie) => {
                        if (sortByType === "date") {
                        return b.date - a.date;
                        } else {
                        return b.vote_average - a.vote_average;
                        }
                    })
            }
        }
        case MoviesActionTypes.ON_LOADING:{
            return {
                ...state,
                isLoading: true
            }
        }
        case MoviesActionTypes.ON_SORT:{
            const tempListSortMovies = state.tempListOfMovies.sort((a, b) => {
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

export default reducer;