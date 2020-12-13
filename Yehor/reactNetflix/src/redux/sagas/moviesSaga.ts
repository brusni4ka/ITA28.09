import { takeLatest, call, put, all } from "redux-saga/effects";
import { moviesReceived, error, loadData } from "../reducers/reducerMovies";
import IMovie from "../../interfaces/IMovie";
import {
  currentMovieLoad,
  currentMovieReceived,
  currentMovieError,
} from "../reducers/reducerMovie";
import { stringify } from "query-string";

export const fetchMoviesApi = async (
  sortBy: string = "release_date",
  searchBy?: string,
  search?: string,
  offset?: number
): Promise<IMovie[]> => {
  const limit = 9;
  const valuesToString = stringify({
    sortBy,
    sortOrder: "desc",
    search,
    searchBy,
    offset,
    limit,
  });
  const url = "https://reactjs-cdp.herokuapp.com/movies?" + valuesToString;

  const getMovies = await fetch(url);
  const movies = await getMovies.json();
  return movies.data;
};

function* requestMoviesSaga(action: ReturnType <typeof loadData>) {
  try {
    const movies = yield call(
      fetchMoviesApi,
      action.payload.sortBy,
      action.payload.searchBy,
      action.payload.search,
      action.payload.offset
    );
    yield put(moviesReceived({ status: "received", movies }));
  } catch {
    yield put(error({ status: "error" }));
  }
}

export const fetchMoviesSub = () => {
  return takeLatest(loadData, requestMoviesSaga);
};

export const fetchCurrentMovieApi = async (id: string): Promise<void> => {
  const getMovies = await fetch(
    `http://reactjs-cdp.herokuapp.com/movies/${id}`
  );
  const movie = await getMovies.json();
  return movie;
};

function* requestCurrentMovieSaga(action: ReturnType <typeof currentMovieLoad>) {
  try {
    const movie = yield call(fetchCurrentMovieApi, action.payload.id);
    yield put(currentMovieReceived({ status: "received", movie }));
  } catch {
    yield put(currentMovieError({ status: "error" }));
  }
}

export const fetchCurrentMovieSub = () => {
  return takeLatest(currentMovieLoad, requestCurrentMovieSaga);
};

export function* fetchSagas() {
  yield all([fetchMoviesSub(), fetchCurrentMovieSub()]);
}
