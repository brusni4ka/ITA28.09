import { particularFilmStartAction } from './particularFilm.actions';

import {particularFilmTypes} from "./particularFilm.types"

export  interface IInitialStateFilm {
    isFatching: boolean,
    film: any,
    id: string
}

const INITIAL_STATE_FILM = {
    isFatching: false,
    film: [],
    id: ""
}

export const filmReducer = (state = INITIAL_STATE_FILM, action : any) => {
    switch (action.type) {
        case particularFilmTypes.FETCH_FILM_BY_ID_START: return {
            ...state,
            isFatching: true,
            id: action.id,    
        }
        case particularFilmTypes.FETCH_FILM_BY_ID_SUCCESS: return {
            ...state,
            isFatching: false,
            film: action.payload
        }  
        case particularFilmTypes.FETCH_FILM_BY_ID_FAILE: return {
            ...state,
            error: action.error
        }
        default:  return state
    }
}

