
import {call, all, takeLatest, put, takeEvery} from "redux-saga/effects"
import {fetchMovies} from "../utilits"
import {
    moviesFetchDataActionSuccess , 
    moviesFetchDataActionFail } from "./movies.actions"

import {moviesTypes} from "./movies.types"



function* getMoviesList (action) {
    try{
        const response = yield fetchMovies()
        console.log(response)
        console.log("works")
        yield put(moviesFetchDataActionSuccess(response))

       

        // yield put(moviesFetchDataActionSuccess(getOnlyMovies))

    }catch(error) {
        yield put(moviesFetchDataActionFail(error))
    }
}

export function* watchGetMoviesList () {
    yield takeLatest(moviesTypes.FETCH_REQUESTED, getMoviesList)
}

export function* moviesSaga () {
    all([
        call(watchGetMoviesList)
    ])
}

export default moviesSaga



