import {takeLatest,call,put,all} from 'redux-saga/effects'
import { MoviesTypes, ILoadData, ReceivedData, Error } from '../actions/moviesActions';
import { MovieTypes, ICurrentMovieLoad, CurrentMovieReceived, CurrentMovieError } from '../actions/movieActions';
import IMovie from "../../interfaces/IMovie"


export const fetchMoviesApi  =  async(sortBy?: string, searchBy?: string, search?: string): Promise<IMovie[]>  => {
    let url = searchBy && search ? `https://reactjs-cdp.herokuapp.com/movies/?${searchBy === "title" ? `search=${search}` : `filter=${search}`}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&limit=10`
    : `https://reactjs-cdp.herokuapp.com/movies?limit=9`;
    const getMovies =  await fetch(url)
    const movies = await getMovies.json()
    console.log(searchBy, search);
    return movies.data;
}

export const fetchCurrentMovieApi  =  async(id: string): Promise<any>  => {
    const getMovies =  await fetch(`http://reactjs-cdp.herokuapp.com/movies/${id}`)
    const movie = await getMovies.json()
    console.log(movie);
    return movie;
}


function* requestMoviesSaga(action: ILoadData) {
    try {
        const movies = yield call(fetchMoviesApi, action.sortBy, action.searchBy, action.search);
        yield put(ReceivedData("received", movies));
    }
    catch {
        yield put(Error('error'));
    }
}

export const fetchMoviesSub = () => {
    return takeLatest(MoviesTypes.LoadData, requestMoviesSaga)
}


function* requestCurrentMovieSaga(action: ICurrentMovieLoad) {
    try {
        console.log(action);
        const movie = yield call(fetchCurrentMovieApi, action.id);
        yield put(CurrentMovieReceived("received", movie));
    }
    catch {
        yield put(CurrentMovieError("error"));
    }
}
export const fetchCurrentMovieSub = () => {
    return takeLatest(MovieTypes.CurrentMovieLoad, requestCurrentMovieSaga)
}

export function* fetchSagas() {
    yield all([
        fetchMoviesSub(),
        fetchCurrentMovieSub()
    ])
}