
import {particularFilmTypes} from "./particularFilm.types"


 export interface IParticularFilmAStartAction {
    type: typeof particularFilmTypes.FETCH_FILM_BY_ID_START,
    id: any
}

export  interface IParticularFilmSuccess  {
    type: typeof particularFilmTypes.FETCH_FILM_BY_ID_SUCCESS,
    payload: any
}

export  interface IParticularFilmFaile  {
    type: typeof particularFilmTypes.FETCH_FILM_BY_ID_FAILE,
    error: any
}

export interface IUpdateMovie {
    type: typeof particularFilmTypes.ON_UPDATE_MOVIE,
}


////////  


export const particularFilmStartAction = (filmId: any): IParticularFilmAStartAction => ({
    type: particularFilmTypes.FETCH_FILM_BY_ID_START,
    id: filmId
})

export const particularFilmSuccess = (film: any): IParticularFilmSuccess  => ({
    type:  particularFilmTypes.FETCH_FILM_BY_ID_SUCCESS,
    payload: film
})

export const  particularFilmFaile = (error: any):  IParticularFilmFaile => ({
    type: particularFilmTypes.FETCH_FILM_BY_ID_FAILE,
    error: error
})

export const onUpdateMovie = (): IUpdateMovie => ({
    type: particularFilmTypes.ON_UPDATE_MOVIE,
});

export type particularFilm = IParticularFilmAStartAction | 
IParticularFilmSuccess |  
IParticularFilmFaile  | 
IUpdateMovie