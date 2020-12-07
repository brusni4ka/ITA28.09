import  { moviesRequested,moviesRecieved,moviesFailed,selectedMovieRequested,selectedMovieRecieved,selectedMovieFailed,loadData,mergeData } from '../Reducers/FetchReducer'
import { takeLatest, call, put, all } from "redux-saga/effects";
import IMovie from "../../Interfaces/IMovie";

export const fetchMoviesApi = async (
  offset: number,
  sortBy?: string,
  searchBy?: string,
  search?: string
): Promise<IMovie[]> => {
  let queryUrl =
    searchBy && search ? `https://reactjs-cdp.herokuapp.com/movies/?${searchBy === "title" ? `search=${search}` 
    : `filter=${search}`}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&offset=${offset}&limit=9`
    : `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&offset=${offset}&limit=9`;
  const getMovies = await fetch(queryUrl);
  const movies = await getMovies.json();
  return movies.data;
};

export const fetchSelectedMovie = async (id: string): Promise<IMovie> => {
  const getMovie = await fetch(`http://reactjs-cdp.herokuapp.com/movies/${id}`);
  const movie = await getMovie.json();
  return movie;
};


function* requestMoviesSaga(action:ReturnType<typeof moviesRequested >) {
  try {
    const movies = yield call(
      fetchMoviesApi,
      action.payload.offset,
      action.payload.sortBy,
      action.payload.searchBy,
      action.payload.search
    ); 
    yield put(moviesRecieved(movies));
  } catch {
    yield put(moviesFailed());
  }
}
export const fetchMoviesSub = () => {
  return takeLatest(moviesRequested,requestMoviesSaga);
};

function* requestSelectedMovieSaga(action:ReturnType<typeof selectedMovieRequested >) {
  try {
    const movie = yield call(fetchSelectedMovie, action.payload.id);
    yield put(selectedMovieRecieved(movie));
  } catch {
    yield put(selectedMovieFailed());
  }
}
export const fetchSelectedMovieSub = () => {
  return takeLatest(
    selectedMovieRequested,
    requestSelectedMovieSaga
  );
};

function* requestMoviesMoreSaga(action:ReturnType<typeof loadData >) {
  try {
    
    const movies = yield call(
      fetchMoviesApi,
      action.payload.offset,
      action.payload.sortBy,
      action.payload.searchBy,
      action.payload.search,
      
    );
    yield put(mergeData(movies));
  } catch {
    yield put(moviesFailed());
  }
}
export const fetchMoviesMoreSub = () => {
  return takeLatest(loadData, requestMoviesMoreSaga);
};

export function* fetchSagas() {
  yield all([fetchMoviesSub(), fetchSelectedMovieSub(), fetchMoviesMoreSub()]);
}
