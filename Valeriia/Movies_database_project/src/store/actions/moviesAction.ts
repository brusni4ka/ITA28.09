import {MoviesActionTypes} from './actionTypes';
import { IMovie } from '../../types';

interface IRequestMoviesSuccessAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS;
    movies:IMovie[];
}

interface IRequestMoviesErrorAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_ERROR;
    error: string
}

export interface IRequestMoviesAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES;
    sortByType: string;
    searchBy?: string;
    searchValue?: string;
}

export const onRequestSuccessMovies = (movies: IMovie[]): IRequestMoviesSuccessAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS,
    movies
});

export const onRequestErrorMovies = (error: string): IRequestMoviesErrorAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_ERROR,
    error
});

export const onRequestMovies = (sortByType: string, searchBy?: string, searchValue?: string): IRequestMoviesAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES,
    sortByType,
    searchBy,
    searchValue
});


export type MoviesAction = 
IRequestMoviesSuccessAction |
IRequestMoviesErrorAction | IRequestMoviesAction;