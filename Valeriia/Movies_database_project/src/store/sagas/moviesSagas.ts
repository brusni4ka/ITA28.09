import {MoviesActionTypes} from '../actions/actionTypes';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    IRequestMoviesAction,
    onRequestErrorMovies, onRequestSuccessMovies,
} from '../actions/moviesAction';
import {fetchListOfMoviesBySortType} from '../sagas/utilits';


function* requestMoviesSaga(action: IRequestMoviesAction){
    try{
        const movies = yield call(fetchListOfMoviesBySortType, action.sortByType, action.searchBy, action.searchValue );
        yield put(onRequestSuccessMovies(movies));
    } catch (error){
        yield put(onRequestErrorMovies(error));
    }
}

export function* watchFetchMovies () {
    yield takeLatest(MoviesActionTypes.ON_REQUEST_MOVIES, requestMoviesSaga)
}


export function* moviesSagas(){
    return yield all([
        watchFetchMovies(),
    ]);
}


