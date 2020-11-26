import {MoviesActionTypes} from '../actions/actionTypes';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {onRequestErrorMovies, onRequestSuccessMovies, IRequestMoviesByTitleAction, onRequestMoviesByTitleError, onRequestMoviesByTitleSuccess,IRequestMoviesByGenreAction } from '../actions/moviesAction';
import {fetchListOfMovies, fetchListOfMoviesByTitle, fetchListOfMoviesByGenre} from '../sagas/utilits';

function* requestMoviesSaga(){
    try{
        const movies = yield call(fetchListOfMovies);
        yield put(onRequestSuccessMovies(movies));
    } catch (e){
        yield put(onRequestErrorMovies());
    }
}

function* requestMoviesByTitleSaga(action: IRequestMoviesByTitleAction){
    try{
        const movies = yield call(fetchListOfMoviesByTitle, action.value);
        yield put(onRequestMoviesByTitleSuccess(movies));
    } catch(e) {
        yield put(onRequestMoviesByTitleError());
    }
}

function* requestMoviesByGenreSaga(action: IRequestMoviesByGenreAction){
    try{
        const movies = yield call(fetchListOfMoviesByGenre, action.value );
        yield put(onRequestSuccessMovies(movies));
    } catch (e){
        yield put(onRequestErrorMovies());
    }
}



export function* watchFetchMovies () {
    yield takeLatest(MoviesActionTypes.ON_REQUEST_MOVIES, requestMoviesSaga)
    yield takeLatest(MoviesActionTypes.ON_REQUEST_MOVIES_BY_TITLE, requestMoviesByTitleSaga)
    yield takeLatest(MoviesActionTypes.ON_REQUEST_MOVIES_BY_GENRE, requestMoviesByGenreSaga)
}

export function* moviesSagas(){
    return yield all([
        watchFetchMovies(),
    ]);
}


