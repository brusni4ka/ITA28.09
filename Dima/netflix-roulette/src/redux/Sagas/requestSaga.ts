import { 
  filmsRequested, 
  currentFilmRequested,
  currentFilmRecieved, 
  currentFilmFailed, 
  paginationRecieved,
  filmsRecieved,
  filmsFailed,
 } from './../Redusers/requestReduser';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import IFilm from 'interfaces/IFilm';

export const getFilms = async(offset: number, sortBy: string, searchBy?: string, search?: string): Promise<IFilm[]> => {
  const url = searchBy && search ? `https://reactjs-cdp.herokuapp.com/movies/?${searchBy === "title" ? `search=${search}` : `filter=${search}`}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&offset=${offset}&limit=9`
  : `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&offset=${offset}&limit=9`
  const films = await(await fetch(url)).json();
  return films.data
};

export const getCurrentFilm = async(id: string): Promise<IFilm> => {
  const currentFilm = await(await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)).json(); 
  return currentFilm;
}

interface IFilmAction {
  type: string,
  payload: {
    offset: number
    sortBy: string
    searchBy: string
    search: string
    pagination: boolean
  }
};
interface ICurrentFilmAction {
  type: string,
  payload: {
    id: string,
    currentFilm: IFilm
  }
}

function* requestFilmSaga(action: IFilmAction) {
  try {
    const films = yield call(getFilms, 
      action.payload.offset,
      action.payload.sortBy, 
      action.payload.searchBy, 
      action.payload.search,
    );
    if(action.payload.pagination) {
      yield put(paginationRecieved(films));
    } else {
      yield put(filmsRecieved(films));
    }
  }
  catch {
    yield put(filmsFailed());
  };
};

function* requestCurrentFilmSaga(action: ICurrentFilmAction) {
  try {
    const currentFilm = yield call(getCurrentFilm, action.payload.id);
    yield put(currentFilmRecieved(currentFilm));
  }
  catch {
    yield put(currentFilmFailed());
  }
};

export const requestFilmsSub = () => {
  return takeLatest(filmsRequested, requestFilmSaga);
};
export const requestCurrentFilmSub = () => {
  return takeLatest(currentFilmRequested, requestCurrentFilmSaga)
};

export function* requestSagas() {
  yield all([
    requestFilmsSub(),
    requestCurrentFilmSub(),
  ]);
};