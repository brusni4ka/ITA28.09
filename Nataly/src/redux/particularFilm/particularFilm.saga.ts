import {call, all, takeLatest, put} from "redux-saga/effects"
import {particularFilmTypes} from "./particularFilm.types"
import {moviesFetchDataActionSuccess} from "../movies/movies.actions"
import {IParticularFilmAStartAction, particularFilmSuccess,  particularFilmFaile} from "./particularFilm.actions"
import {fetchMovieById,  fetchListOfMovies} from "../utilits"


function* fetchFilmSaga(action: IParticularFilmAStartAction){
    try{
        const movie = yield call(fetchMovieById , action.id);
        const moviesByGenre = yield call(fetchListOfMovies, "release_date", "genres", movie.genres)
        yield put(particularFilmSuccess(movie));
        yield put(moviesFetchDataActionSuccess(moviesByGenre));
     
    } catch (error){
        yield put(particularFilmFaile(error));
    }
}

export function* watchFetchFilm () {
    yield takeLatest(particularFilmTypes.FETCH_FILM_BY_ID_START, fetchFilmSaga);
}

export function* filmSagas(){
    return yield all([
        watchFetchFilm(),
    ]);
}
