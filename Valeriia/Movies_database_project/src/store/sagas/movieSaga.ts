import {MovieActionTypes} from '../actions/actionTypes';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {fetchMovieById} from './services';
import {IRequestMovieAction, onRequestMovieSuccess, onRequestMovieError} from '../actions/movieActions';
import { onRequestMovies } from '../actions/moviesAction';

function* requestMovieSaga(action: IRequestMovieAction){
    try{
        const movie = yield call(fetchMovieById, action.id);
        yield put(onRequestMovieSuccess(movie));
        yield put(onRequestMovies("genres", "release_date", movie.genres.join(","), 9,true));
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


