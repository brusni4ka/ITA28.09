import { all } from "redux-saga/effects";
import { fetchSagas } from "./sagas/moviesSaga";

export default function* rootSaga() {
  yield all([fetchSagas()]);
}
