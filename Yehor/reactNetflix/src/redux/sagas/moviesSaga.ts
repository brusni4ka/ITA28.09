import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  MoviesTypes,
  ILoadData,
  receivedData,
  error
} from "../actions/moviesActions";
import {
  MovieTypes,
  ICurrentMovieLoad,
  currentMovieReceived,
  currentMovieError
} from "../actions/movieActions";
import IMovie from "../../interfaces/IMovie";

export const fetchMoviesApi = async (sortBy?: string, searchBy?: string, search?: string, offset?: number): Promise<IMovie[]> => {
  const limit = 'limit=9'
  
  let url = 
  searchBy && search && sortBy ? `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${search}&searchBy=${searchBy}&offset=${offset}&${limit}`:
  searchBy && search ? `https://reactjs-cdp.herokuapp.com/movies?search=${search}&searchBy=${searchBy}&offset=${offset}&${limit}`:
  sortBy ? `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&offset=${offset}&${limit}`:
  `https://reactjs-cdp.herokuapp.com/movies?sortBy=release_data&sortOrder=desc&offset=${offset}&${limit}`
  const getMovies = await fetch(url);
  const movies = await getMovies.json();
  return movies.data;
};

export const fetchCurrentMovieApi = async (id: string): Promise<void> => {
  const getMovies = await fetch(
    `http://reactjs-cdp.herokuapp.com/movies/${id}`
  );
  const movie = await getMovies.json();
  console.log(movie);
  return movie;
};

function* requestMoviesSaga(action: ILoadData) {
  try {
    const movies = yield call(
      fetchMoviesApi,
      action.sortBy,
      action.searchBy,
      action.search,
      action.offset,
    );
    yield put(receivedData("received", movies));
  } catch {
    yield put(error("error"));
  }
}

export const fetchMoviesSub = () => {
  return takeLatest(MoviesTypes.LoadData, requestMoviesSaga);
};

function* requestCurrentMovieSaga(action: ICurrentMovieLoad) {
  try {
    console.log(action);
    const movie = yield call(fetchCurrentMovieApi, action.id);
    yield put(currentMovieReceived("received", movie));
  } catch {
    yield put(currentMovieError("error"));
  }
}
//ReceivedDataMore

// function* requestReceivedDataMoreSaga(action: ILoadData) {
//   try {
//     const movies = yield call(
//       fetchMoviesApi,
//       action.sortBy,
//       action.searchBy,
//       action.search,
//       action.offset,
//     );
//     yield put(ReceivedDataMore("received", movies));
//   } catch {
//     yield put(Error("error"));
//   }
// }

// export const receivedDataMoreSub = () => {
//   return takeLatest(MoviesTypes.ReceivedDataMore, requestReceivedDataMoreSaga);
// };

// ReceivedDataMore
export const fetchCurrentMovieSub = () => {
  return takeLatest(MovieTypes.CurrentMovieLoad, requestCurrentMovieSaga);
};


export function* fetchSagas() {
  yield all([fetchMoviesSub(), fetchCurrentMovieSub()]);
}
