import { createSlice, PayloadAction} from '@reduxjs/toolkit'

import { IMovie } from "../../types";

export interface IRequestMovieAction{
  type: string,
  payload: {
    id: string;
  }
}

export interface IRequestMovieSuccessAction{
    movie:IMovie;
}

interface IRequestMovieErrorAction{
    error: boolean
}
  
export interface IMovieDetailsState {
  movie: IMovie | null;
  isError: boolean;
  isLoading: boolean;
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movie: null,
        isError: false,
        isLoading: false
    },
    reducers: {
      onRequestMovie(state){
          state.isLoading = true
      },
      onRequestSuccessMovie(state: IMovieDetailsState, action: PayloadAction<IRequestMovieSuccessAction>){
        state.movie = action.payload.movie
        state.isLoading = false
      },

      onRequestErrorMovie(state: IMovieDetailsState,action: PayloadAction<IRequestMovieErrorAction>){
        state.isLoading = false
        state.isError = action.payload.error;
      },
     
    }
  })
  export const {onRequestSuccessMovie, onRequestMovie,onRequestErrorMovie} = movieSlice.actions;
  export default movieSlice.reducer;
