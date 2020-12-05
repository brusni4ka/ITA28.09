import { all } from 'redux-saga/effects';
import { requestSagas } from './redux/Sagas/requestSaga'

export default function* rootSaga() {
  yield all([
    requestSagas()
  ])
}