import {all} from 'redux-saga/effects';
import {moviesSagas} from '../sagas/moviesSagas';

export default function* rootSaga(){
    yield all([
        moviesSagas()
    ])
}