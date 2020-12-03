import {MoviesActionTypes} from './actionTypes';
import { IMovie } from '../../types';

// export interface IRequestMoviesSuccessAction{
//     type: MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS;
//     movies:IMovie[];
// }

interface IRequestMoviesErrorAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_ERROR;
    error: string
}

export interface IRequestMoviesWithLazyLoadingAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_WITH_LAZY_LOADING;
    movies: IMovie[]
}

export interface IRequestMoviesAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES;
    sortByType: string;
    searchBy?: string;
    searchValue?: string;
    offset?: number;
    isLazyLoading?: boolean
}

// export const onRequestSuccessMovies = (movies: IMovie[]): IRequestMoviesSuccessAction => (
//     {
//     type: MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS,
//     movies
// });

export const onRequestErrorMovies = (error: string): IRequestMoviesErrorAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_ERROR,
    error
});

export const onRequestMoviesWithLazyLoading = (movies: IMovie[]): IRequestMoviesWithLazyLoadingAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_WITH_LAZY_LOADING,
    movies
    
});

export const onRequestMovies = (sortByType: string, searchBy?: string, searchValue?: string, offset?: number, isLazyLoading?: boolean): IRequestMoviesAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES,
    sortByType,
    searchBy,
    searchValue,
    offset,
    isLazyLoading
});


export type MoviesAction = 
// IRequestMoviesSuccessAction |
IRequestMoviesErrorAction | IRequestMoviesAction | IRequestMoviesWithLazyLoadingAction;