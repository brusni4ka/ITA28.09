
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IMovie from "../../interfaces/IMovie";



interface IState {
  status: string;
  movie: IMovie | null;
  id: string;
}

const movieDefaultState: IState = {
  status: "",
  movie: null,
  id: ""
};

interface IcurrentMovieLoad {
    status: string,
    id: string
}

interface IcurrentMovieReceived {
    status: string,
    movie: IMovie,
}
interface IcurrentMovieError {
    status: string
}

  const movieSlice = createSlice({
    name: 'movie',
    initialState: movieDefaultState,
    reducers: {
      currentMovieLoad(state:IState, action:PayloadAction<IcurrentMovieLoad>){
        state.status = action.payload.status;
        state.id = action.payload.id;
      },
      currentMovieReceived(state:IState,action:PayloadAction<IcurrentMovieReceived>){
        state.status=action.payload.status;
        state.movie= action.payload.movie;
      },
      currentMovieError(state:IState, action:PayloadAction<IcurrentMovieError>){
        state.status=action.payload.status;
      },
      
      }
  })
  export const {currentMovieLoad, currentMovieReceived, currentMovieError} = movieSlice.actions

  // export const {moviesRequested,moviesRecieved,moviesFailed,selectedMovieRequested,selectedMovieRecieved,selectedMovieFailed,loadData,mergeData} = moviesSlice.actions;
 export const {reducer} = movieSlice;

