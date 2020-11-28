import { CurrentFilmRecieved, CurrentFilmFailed } from './../Actions/requestActions';
import { RequestActionsTypes } from '../Redusers/requestReduser';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { IFilmsRequested, FilmsRecieved, FilmsFailed, ICurrentFilmRequested } from '../Actions/requestActions';
import IFilm from 'interfaces/IFilm';

export const getFIlms = async(sortBy: string, searchBy?: string, search?: string): Promise<IFilm[]> => {
  const url = searchBy && search ? `https://reactjs-cdp.herokuapp.com/movies/?${searchBy === "title" ? `search=${search}` : `filter=${search}`}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&limit=9`
  : `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&limit=9` 
  const films = await(await fetch(url)).json();
  return films.data
};

export const getCurrentFilm = async(id: string): Promise<IFilm> => {
  const currentFilm = await(await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)).json(); 
  return currentFilm;
}

function* requestFilmSaga(action: IFilmsRequested) {
  try {
    const films = yield call(getFIlms, action.sortBy, action.searchBy, action.search);
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