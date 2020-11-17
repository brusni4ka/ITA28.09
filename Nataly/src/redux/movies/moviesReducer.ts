import {moviesTypes} from "./movies.types"
 
interface InitialState {
    movies: []
}

const INITIAL_STATE: InitialState = {
    movies: []
}

export const moviesReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case moviesTypes.MOVIES: return {
            ...state, 
            movies: action.payload
        }
        default: state;
    }
}