import {fetchMovies} from "../utilits"

import {call, all, takeLatest, put} from "redux-saga/effects"


import {moviesAction} from "./movies.actions"
import {moviesTypes} from "./movies.types"

function* getMoviesList () {
    try{
        const moviesList = yield call(fetchMovies)
        yield put(moviesAction(moviesList))
    }catch(error) {
        yield put(error)
    }
}

export function* watcherGetMoviesLIst () {
    yield takeLatest(moviesTypes.MOVIESDEFAULT ,getMoviesList)
}

export function* moviesSaga () {
    all([
        call(watcherGetMoviesLIst)
    ])
}



