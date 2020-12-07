
import {call, all, takeLatest, put} from "redux-saga/effects"

import {
    fetchListOfMovies

} from "../utilits"

import { 
    moviesFetchDataActionSuccess, 
    moviesFetchDataActionFaile, 
    ImoviesFetchStartAction,
    
} from "./movies.actions"

import {moviesTypes} from "./movies.types"

function* getMoviesListResult (action: ImoviesFetchStartAction) {
    try{
        const data = yield call(fetchListOfMovies,  
            action.sortByType, 
            action.searchBy, 
            action.searchValue)
        console.log("saga effect by default")
        yield put(moviesFetchDataActionSuccess(data))

    }catch(error) {
        yield put(moviesFetchDataActionFaile(error))
        console.log(error)
    }
}


function* watchGetMoviesList () {

    yield takeLatest(moviesTypes.FETCH_REQUESTED, getMoviesListResult)
}



export function* moviesSaga () {
    yield  all([
        call(watchGetMoviesList),
    ])
}

export default moviesSaga



