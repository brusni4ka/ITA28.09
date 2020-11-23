
import { yellow } from "@material-ui/core/colors"
import {call, all, takeLatest, put, takeEvery} from "redux-saga/effects"

import {fetchMovies} from "../utilits"

import { moviesFetchDataActionSuccess } from "./movies.actions"

import {moviesTypes} from "./movies.types"

function* helloSaga() {
    yield console.log('Hello Sagas!')
  }

  let hello = helloSaga().next()
  console.log(hello)

function* getMoviesList (action) {
    try{
        const data = yield call(fetchMovies)
        // yield console.log(data)
        // yield put(moviesFetchDataActionSuccess(data))
    //     const data = yield call( () => {  
    //         fetch('http://reactjs-cdp.herokuapp.com/movies')
    //         .then((res) => res.json())
    //         // .then(res => console.log(res))
    // })
    yield console.log(data)
        yield put(moviesFetchDataActionSuccess(data))

    }catch(error) {
        yield put(moviesTypes.FETCH_FAILED, error)
    }
}


const res  = getMoviesList()
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())

export function* watchGetMoviesList () {
    yield takeLatest(moviesTypes.FETCH_REQUESTED, getMoviesList)
}



export function* moviesSaga () {
    all([
        call(helloSaga),
        call(watchGetMoviesList)
    ])
}



export default moviesSaga



