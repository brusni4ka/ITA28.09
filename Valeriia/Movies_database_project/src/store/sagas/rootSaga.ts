import {all} from 'redux-saga/effects';
import {moviesSagas} from '../sagas/moviesSagas';
import {movieSagas} from '../sagas/movieSaga';

export default function* rootSaga(){
    yield all([
        moviesSagas(),
        movieSagas()
    ])
}