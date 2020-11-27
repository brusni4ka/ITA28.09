import { IMovie } from '../../types';
import {MovieActionTypes} from './actionTypes';

export interface IRequestMovieAction{
    type: MovieActionTypes.ON_REQUEST_MOVIE;
    id: number
}

interface IRequestMovieSuccessAction{
    type: MovieActionTypes.ON_REQUEST_MOVIE_SUCCESS;
    movie: IMovie,
}

interface IRequestMovieErrorAction{
    type: MovieActionTypes.ON_REQUEST_MOVIE_ERROR;
    error: string
}

interface IUpdateMovie{
    type:MovieActionTypes.ON_UPDATE_MOVIE;
}

export const onRequestMovie = (id: number): IRequestMovieAction => (
    {
    type: MovieActionTypes.ON_REQUEST_MOVIE,
    id
});

export const onRequestMovieSuccess = (movie : IMovie): IRequestMovieSuccessAction => (
    {
    type: MovieActionTypes.ON_REQUEST_MOVIE_SUCCESS,
    movie
});

export const onRequestMovieError = (error: string): IRequestMovieErrorAction => (
    {
    type: MovieActionTypes.ON_REQUEST_MOVIE_ERROR,
    error
});

export const onUpdateMovie = (): IUpdateMovie => ({
    type: MovieActionTypes.ON_UPDATE_MOVIE,
});

export type MovieAction = IRequestMovieAction | IRequestMovieSuccessAction | IRequestMovieErrorAction | IUpdateMovie;