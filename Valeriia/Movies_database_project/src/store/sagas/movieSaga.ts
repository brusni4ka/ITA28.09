import {MovieActionTypes} from '../actions/actionTypes';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {fetchListOfMoviesBySortType, fetchMovieById} from './services';
import {IRequestMovieAction, onRequestMovieSuccess, onRequestMovieError} from '../actions/movieActions';
import { onRequestSuccessMovies } from '../actions/moviesAction';

function* requestMovieSaga(action: IRequestMovieAction){
    try{
        const movie = yield call(fetchMovieById, action.id);
        const moviesBySameGenre = yield call(fetchListOfMoviesBySortType, "release_date", "genres", movie.genres)
        yield put(onRequestMovieSuccess(movie));
        yield put(onRequestSuccessMovies(moviesBySameGenre));
     
    } catch (error){
        yield put(onRequestMovieError(error));
    }
}

export function* watchFetchMovie () {
    yield takeLatest(MovieActionTypes.ON_REQUEST_MOVIE, requestMovieSaga);
}

export function* movieSagas(){
    return yield all([
        watchFetchMovie(),
    ]);
}


