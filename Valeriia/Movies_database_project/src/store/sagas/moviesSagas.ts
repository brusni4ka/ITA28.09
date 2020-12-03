import {MoviesActionTypes} from '../actions/actionTypes';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    IRequestMoviesAction, onRequestErrorMovies, onRequestMoviesWithLazyLoading} from '../actions/moviesAction';
    
import {fetchListOfMovies} from './services';
import { onRequestSuccessMovies } from '../reducers/MoviesReducer';

function* requestMoviesSaga(action: IRequestMoviesAction){
    try{
        const movies = yield call(fetchListOfMovies, action.sortByType, action.searchBy, action.searchValue, action.offset );
        if(!action.isLazyLoading){
            yield put(onRequestSuccessMovies(movies));
        } else{
            yield put(onRequestMoviesWithLazyLoading(movies));
        }
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


