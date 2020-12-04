import {all, call, put, takeLatest} from 'redux-saga/effects';
import {fetchMovieById} from './services';
import { ON_REQUEST_MOVIE} from '../actions/movieActions';
import { IRequestMovieAction, onRequestMovie, onRequestSuccessMovie, onRequestErrorMovie } from '../reducers/MovieReducer';
import { ON_REQUEST_MOVIES } from '../actions/moviesAction';

function* requestMovieSaga(action: IRequestMovieAction){
    try{
        yield put(onRequestMovie());
        const movie = yield call(fetchMovieById, action.payload.id);
        yield put(onRequestSuccessMovie({movie}));
        yield put({type: ON_REQUEST_MOVIES, payload: {sortByType: "genres", searchBy: "release_date", searchValue: movie.genres.join(",")}});
    } catch (error){
        yield put(onRequestErrorMovie({error}));
    }
}

export function* watchFetchMovie () {
    yield takeLatest(ON_REQUEST_MOVIE, requestMovieSaga);
}

export function* movieSagas(){
    return yield all([
        watchFetchMovie(),
    ]);
}


