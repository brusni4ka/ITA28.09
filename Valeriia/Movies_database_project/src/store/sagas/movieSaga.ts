import {MovieActionTypes} from '../actions/actionTypes';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {fetchMovieById} from '../sagas/utilits';
import {IRequestMovieAction, onRequestMovieSuccess, onRequestMovieError} from '../actions/movieActions';

function* requestMovieSaga(action: IRequestMovieAction){
    try{
        const movie = yield call(fetchMovieById, action.id);
        yield put(onRequestMovieSuccess(movie));
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


