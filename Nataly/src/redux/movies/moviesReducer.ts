import {moviesTypes} from "./movies.types"

import {IMovies, MoviesFetchTypesActions} from "./movies.actions"
import { start } from "repl"

 
export interface InitialState {
    movies: IMovies[],
    isFatching: boolean,
    errorMesage: any,
    renderResult: boolean,
    rating: boolean,
    release: boolean,
    value: string,

    sortBy: string

}

const INITIAL_STATE: InitialState = {
    movies: [],
    isFatching: false,
    errorMesage: "",
    renderResult: false,
    rating: true,
    release: false,
    value: "",

    sortBy: "release_date",
}

 export const moviesReducer = (state = INITIAL_STATE, action: MoviesFetchTypesActions) => {

    switch (action.type) {
        case moviesTypes.FETCH_REQUESTED: return {
            ...state, 
            isFatching: true,
            sortBy: action.sortByType
        }
        case moviesTypes.MOVIES_DEFAULT: return {
            ...state, 
            isFatching: false,
            movies: action.payload,
            renderResult: false,
        }
        case moviesTypes.FETCH_FAILED : return {
            ...state, 
            isFatching: false,
            errorMesage: action.error
        }

        ////////////////
        // case moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_START : return {
        //     ...state,
        //     isFatching: true,
        //     value: action.value
        // }
        // case moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_SUCCESS : return  {
        //     ...state,
        //     isFatching: false,
        //     movies: action.payload,
        // }

        // case moviesTypes.ACTIVE_SEARCH_BY_GENRE_BUTTON_FAILE: return {
        //     ...state,
        //     isFatching: false,
        //     error: action.error
        // }

        // /////////////////
        // case moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_START: return {
        //     ...state,
        //     isFatching: true,
        //     value: action.value
        // }

        // case moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_SUCCESS: return {
        //     ...state,
        //     isFatching: false,
        //     movies: action.payload  
        // }

        // case moviesTypes.ACTIVE_SEARCH_BY_TITLE_BUTTON_FAILE: return {
        //     ...state,
        //     isFatching: false,
        //     error: action.error
        // }
        // case moviesTypes.GET_VALUE_FROM_FORM : return {
        //     ...state,    
        //     value: action.payload
        // }

        default: return state;
    }
} 





