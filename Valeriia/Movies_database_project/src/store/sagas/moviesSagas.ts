import {MoviesActionTypes} from '../actions/actionTypes';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    IRequestMoviesAction,
    onRequestErrorMovies, onRequestSuccessMovies
} from '../actions/moviesAction';
import {fetchListOfMovies, fetchListOfMoviesByTitle, fetchListOfMoviesByGenre} from '../sagas/utilits';

function* requestMoviesSaga(){
    try{
        const movies = yield call(fetchListOfMovies);
        yield put(onRequestSuccessMovies(movies));
    } catch (e){
        yield put(onRequestErrorMovies());
    }
}

function* requestMoviesByTitleSaga(action: IRequestMoviesAction){
    try{
        const movies = yield call(fetchListOfMoviesByTitle, action.searchTerm);
        yield put(onRequestSuccessMovies(movies));
    } catch(e) {
        yield put(onRequestErrorMovies());
    }
}

function* requestMoviesByGenreSaga(action: IRequestMoviesAction){
    try{
        const movies = yield call(fetchListOfMoviesByGenre, action.searchTerm );
        yield put(onRequestSuccessMovies(movies));
    } catch (e){
        yield put(onRequestErrorMovies());
    }
}

export function* watchFetchMovies () {
    yield takeLatest(MoviesActionTypes.ON_REQUEST_MOVIES, requestMoviesSaga)
    yield takeLatest(MoviesActionTypes.ON_REQUEST_MOVIES, requestMoviesByTitleSaga)
    yield takeLatest(MoviesActionTypes.ON_REQUEST_MOVIES, requestMoviesByGenreSaga)
}

export function* moviesSagas(){
    return yield all([
        watchFetchMovies(),
    ]);
}


