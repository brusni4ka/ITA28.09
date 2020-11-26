import {MoviesActionTypes} from './actionTypes';
import { IMovie } from '../../types';

interface ISort{
    type:MoviesActionTypes.ON_SORT;
    sortByType:string
}

export interface IRequestMoviesAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES;
    searchTerm?: string
}

interface IRequestMoviesSuccessAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS;
    movies:IMovie[];
}

interface IRequestMoviesErrorAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_ERROR;
}


export const onSort = (sortByType:string): ISort => ({
    type: MoviesActionTypes.ON_SORT,
    sortByType
});

export const onRequestMovies = (searchTerm?: string): IRequestMoviesAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES,
    searchTerm
});

export const onRequestSuccessMovies = (movies: IMovie[]): IRequestMoviesSuccessAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS,
    movies
});

export const onRequestErrorMovies = (): IRequestMoviesErrorAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_ERROR,
});





export type MoviesAction = 
ISort | IRequestMoviesAction
| IRequestMoviesSuccessAction |
IRequestMoviesErrorAction;