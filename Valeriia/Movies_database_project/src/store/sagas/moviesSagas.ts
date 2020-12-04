import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    IRequestMoviesAction, onRequestMovies} from '../reducers/MoviesReducer';
import {fetchListOfMovies} from './services';
import {onRequestSuccessMovies,onRequestMoviesWithLazyLoading,onRequestErrorMovies } from '../reducers/MoviesReducer';
import {ON_REQUEST_MOVIES} from '../actions/moviesAction';


function* requestMoviesSaga(action: IRequestMoviesAction){
    try{
        yield put(onRequestMovies());
        const movies = yield call(fetchListOfMovies, action.payload.sortByType, action.payload.searchBy, action.payload.searchValue, action.payload.offset );
        if(!action.payload.isLazyLoading){
            yield put(onRequestSuccessMovies({movies}));
        } else{
            yield put(onRequestMoviesWithLazyLoading({movies}));
        }
    } catch (error){
        yield put(onRequestErrorMovies({error}));
    }
}

export function* watchFetchMovies () {
    yield takeLatest(ON_REQUEST_MOVIES, requestMoviesSaga);
}

export function* moviesSagas(){
    return yield all([
        watchFetchMovies(),
    ]);
}


