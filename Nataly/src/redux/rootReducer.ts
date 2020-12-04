import {combineReducers} from "redux"

import {moviesReducer, InitialState} from "./movies/moviesReducer"
import {filmReducer, IInitialStateFilm } from "./particularFilm/particularFilm.reducer"

export interface RootState {
  movies: InitialState,
  film: IInitialStateFilm 
}


const  rootReducer = combineReducers({
  film: filmReducer,
  movies: moviesReducer,
})



// export type RootState = ReturnType<typeof rootReducer>


export default rootReducer

