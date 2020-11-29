import {MovieTypes, IMovieAction} from "../actions/movieActions"
import IMovie from "../../interfaces/IMovie"

interface IState {
    status: string
    movie: IMovie | null
}

const moviestDefaultState:IState = {
    status: '',
    movie: null
}

const reducerMovies = (state = moviestDefaultState, action: IMovieAction) => {
    switch(action.type) {
        case MovieTypes.CurrentMovieLoad: {
            return {
                ...state,
                status: action.status,
                id: action.id
            }
        }
        case MovieTypes.CurrentMovieReceived: {
            return {
                ...state,
                status: action.status,
                movie: action.movie
            }
        }
        case MovieTypes.CurrentMovieError: {
            return {
                ...state,
                status: action.status
            }
        }       
        default: return state;
    }
}

export default reducerMovies;