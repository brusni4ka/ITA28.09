import {MoviesTypes, IMoviesAction} from "../actions/moviesActions"
import IMovie from "../../interfaces/IMovie"

interface IState {
    status: string,
    movies: IMovie[]
}

const moviestDefaultState:IState = {
    status: '',
    movies: []
}

const reducerMovies = (state = moviestDefaultState, action: IMoviesAction) => {
    switch(action.type) {
        case MoviesTypes.LoadData: {
            return {
                ...state,
                status: action.status
            }
        }
        case MoviesTypes.ReceivedData: {
            return {
                ...state,
                status: action.status,
                movies: action.movies
            }
        }
        case MoviesTypes.Error: {
            return {
                ...state,
                status: action.status
            }
        }
        default: return state;
    }
}

export default reducerMovies;