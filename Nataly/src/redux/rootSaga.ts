import { all, call } from 'redux-saga/effects';
import moviesSaga from "./movies/movies.saga"
import {filmSagas} from "./particularFilm/particularFilm.saga"




export default function* rootSaga() {
    yield all([
      moviesSaga(),
      filmSagas()
    ])
  }