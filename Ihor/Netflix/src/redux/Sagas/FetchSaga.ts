import { FetchActionsTypes } from "../Reducers/FetchReducer";
import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  IMoviesRequested,
  MoviesFailed,
  MoviesRecieved,
  ISelectedMovieRequested,
  selectedMovieRecieved,
  selectedMovieFailed,
  ILoadData,
  mergeData,
} from "../Actions/FetchActions";
import IMovie from "../../Interfaces/IMovie";

export const fetchMoviesApi = async (
  offset: number,
  sortBy?: string,
  searchBy?: string,
  search?: string
): Promise<IMovie[]> => {
  let queryUrl =
    searchBy && search
      ? `https://reactjs-cdp.herokuapp.com/movies/?${
          searchBy === "title" ? `search=${search}` : `filter=${search}`
        }&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&offset=${offset}`
      : `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&offset=${offset}`;
  const getMovies = await fetch(queryUrl);
  const movies = await getMovies.json();
  return movies.data;
};

export const fetchSelectedMovie = async (id: string): Promise<IMovie> => {
  const getMovie = await fetch(`http://reactjs-cdp.herokuapp.com/movies/${id}`);
  const movie = await getMovie.json();
  return movie;
};

function* requestMoviesSaga(action: IMoviesRequested) {
  try {
    const movies = yield call(
      fetchMoviesApi,
      action.offset,
      action.sortBy,
      action.searchBy,
      action.search
    );
    yield put(MoviesRecieved(movies));
  } catch {
    yield put(MoviesFailed());
  }
}
export const fetchMoviesSub = () => {
  return takeLatest(FetchActionsTypes.MOVIES_REQUESTED, requestMoviesSaga);
};

function* requestSelectedMovieSaga(action: ISelectedMovieRequested) {
  try {
    const movie = yield call(fetchSelectedMovie, action.payload);
    yield put(selectedMovieRecieved(movie));
  } catch {
    yield put(selectedMovieFailed());
  }
}
export const fetchSelectedMovieSub = () => {
  return takeLatest(
    FetchActionsTypes.SELECTED_MOVIE_REQUESTED,
    requestSelectedMovieSaga
  );
};

function* requestMoviesMoreSaga(action: ILoadData) {
  try {
    const movies = yield call(
      fetchMoviesApi,
      action.offset,
      action.sortBy,
      action.searchBy,
      action.search
    );
    yield put(mergeData(movies));
  } catch {
    yield put(MoviesFailed());
  }
}
export const fetchMoviesMoreSub = () => {
  return takeLatest(FetchActionsTypes.LOAD_DATA, requestMoviesMoreSaga);
};

export function* fetchSagas() {
  yield all([fetchMoviesSub(), fetchSelectedMovieSub(), fetchMoviesMoreSub()]);
}
