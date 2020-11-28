import {all} from 'redux-saga/effects'
import {fetchSagas} from './Sagas/FetchSaga';


export default function* rootSaga() {
    yield all([
        fetchSagas()
    ])
}