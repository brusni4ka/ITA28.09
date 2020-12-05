import { takeLatest, call, put, all } from "redux-saga/effects";
import { moviesReceived, error, loadData } from "../reducers/reducerMovies";
import IMovie from "../../interfaces/IMovie";
import {
  currentMovieLoad,
  currentMovieReceived,
  currentMovieError,
} from "../reducers/reducerMovie";

export const fetchMoviesApi = async (
  sortBy?: string,
  searchBy?: string,
  search?: string,
  offset?: number
): Promise<IMovie[]> => {
  const limit = 9;
  const url =
    searchBy && search
      ? `https://reactjs-cdp.herokuapp.com/movies?sortBy=
  ${sortBy ? sortBy : "release_data"}
  &search=${search}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`
      : `https://reactjs-cdp.herokuapp.com/movies?sortBy=release_data&sortOrder=desc&offset=${offset}&limit=${limit}`;
  const getMovies = await fetch(url);
  const movies = await getMovies.json();
  return movies.data;
};

interface ILoadDataAction {
  payload: {
    offset: number;
    search: string;
    searchBy: string;
    sortBy: string;
  };
  type: string;
}

function* requestMoviesSaga(action: ILoadDataAction) {
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

interface IcurrentMovieLoad {
  type: string;
  payload: {
    status: string;
    id: string;
  };
}

function* requestCurrentMovieSaga(action: IcurrentMovieLoad) {
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
