import {MoviesActionTypes} from './actionTypes';
import { IMovie } from '../../types';

interface IStartLoading{
    type:MoviesActionTypes.ON_START_LOADING;
}

interface IEndLoading{
    type:MoviesActionTypes.ON_END_LOADING;
}

interface ISort{
    type:MoviesActionTypes.ON_SORT;
    sortByType:string
}

export interface IRequestMoviesAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES;
}

interface IRequestMoviesSuccessAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS;
    movies:IMovie[];
}

interface IRequestMoviesErrorAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_ERROR;
}

export interface IRequestMoviesByTitleAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE;
    value: string
}

interface IRequestMoviesByTitleSuccessAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE_SUCCESS;
    movies: IMovie[]
}

interface IRequestMoviesByTitleErrorAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE_ERROR;
}

export interface IRequestMoviesByGenreAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE;
    value: string
}

interface IRequestMoviesByGenreSuccessAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE_SUCCESS;
    movies: IMovie[]
}

interface IRequestMoviesByGenreErrorAction{
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE_ERROR;
}


export const onStartLoading = (): IStartLoading => ({
    type: MoviesActionTypes.ON_START_LOADING
});

export const onEndLoading = (): IEndLoading => ({
    type: MoviesActionTypes.ON_END_LOADING
});

export const onSort = (sortByType:string): ISort => ({
    type: MoviesActionTypes.ON_SORT,
    sortByType
});

export const onRequestMovies = (): IRequestMoviesAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES,
    
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

export const onRequestMoviesByTitle = (value: string): IRequestMoviesByTitleAction => (
    
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE,
    value
});

export const onRequestMoviesByTitleSuccess = (movies: IMovie[]): IRequestMoviesByTitleSuccessAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE_SUCCESS,
    movies
});

export const onRequestMoviesByTitleError = (): IRequestMoviesByTitleErrorAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE_ERROR,
});

export const onRequestMoviesByGenre = (value: string): IRequestMoviesByGenreAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE,
    value
});

export const onRequestMoviesByGenreSuccess = (movies: IMovie[]): IRequestMoviesByGenreSuccessAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE_SUCCESS,
    movies
});

export const onRequestMoviesByGenreError = (): IRequestMoviesByGenreErrorAction => (
    {
    type: MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE_ERROR,
    
});



export type MoviesAction = 
IStartLoading | IEndLoading |
ISort | IRequestMoviesAction
| IRequestMoviesSuccessAction |
IRequestMoviesErrorAction | IRequestMoviesByTitleAction |
IRequestMoviesByTitleErrorAction
| IRequestMoviesByTitleSuccessAction | IRequestMoviesByGenreAction;