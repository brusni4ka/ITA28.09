import { CurrentFilmRecieved, CurrentFilmFailed } from './../Actions/requestActions';
import { RequestActionsTypes } from '../Redusers/requestReduser';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { IFilmsRequested, FilmsRecieved, FilmsFailed, ICurrentFilmRequested } from '../Actions/requestActions';
import IFilm from 'interfaces/IFilm';

export const getFIlms = async(requestData: string): Promise<IFilm[]> => {
  const films = await(await fetch(`https://reactjs-cdp.herokuapp.com/movies?${requestData}&limit=9`)).json();
  return films.data
};

export const getCurrentFilm = async(id: string): Promise<IFilm> => {
  const currentFilm = await(await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)).json(); 
  return currentFilm;
}

function* requestFilmSaga(action: IFilmsRequested) {
  try {
    const films = yield call(getFIlms, action.payload);
    yield put(FilmsRecieved(films));
  }
  catch {
    yield put(FilmsFailed());
  };
};

function* requestCurrentFilmSaga(action: ICurrentFilmRequested) {
  try {
    const currentFilm = yield call(getCurrentFilm, action.payload);
    yield put(CurrentFilmRecieved(currentFilm));
  }
  catch {
    yield put(CurrentFilmFailed());
  }
};

export const requestFilmsSub = () => {
  return takeLatest(RequestActionsTypes.FILMS_REQUESTED, requestFilmSaga);
};
export const requestCurrentFilmSub = () => {
  return takeLatest(RequestActionsTypes.CURRENTFILM_REQUESTED, requestCurrentFilmSaga)
};



export function* requestSagas() {
  yield all([
    requestFilmsSub(),
    requestCurrentFilmSub(),
  ]);
};