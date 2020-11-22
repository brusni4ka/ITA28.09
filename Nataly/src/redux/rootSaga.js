import { all, call } from 'redux-saga/effects';
import moviesSaga from "./movies/movies.saga"



export default function* rootSaga() {
    yield all([
      call(moviesSaga)
    ])
  }