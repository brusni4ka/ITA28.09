import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IMovie from "../../interfaces/IMovie";

interface IState {
  status: string;
  movies: IMovie[];
  offset: number;
}
const moviesDefaultState: IState = {

  status: "",
  movies: [],
  offset: 0,
};

export interface ILoadData {
  sortBy?: string;
  searchBy?: string;
  search?: string;
  offset?: number;
}

export interface IReceivedData {
  status: string;
  movies: IMovie[];
}
export interface IError {
  status: string;
}

const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesDefaultState,
  reducers: {
    loadData(state: IState, action: PayloadAction<ILoadData>) {},
    moviesReceived(state: IState, action: PayloadAction<IReceivedData>) {
      state.status = action.payload.status;
      state.movies = action.payload.movies;
    },
    error(state: IState, action: PayloadAction<IError>) {
      state.status = action.payload.status;
    },
    dataOffsetIncrement(state: IState) {
      state.offset =
        state.movies && state.movies.length < 9
          ? state.offset
          : state.offset + 9;
    },
    dataOffsetDecrement(state: IState) {
      state.offset = state.offset < 9 ? state.offset : state.offset - 9;
    },
    dataOffsetToNull(state: IState) {
      state.offset = 0;
    }
  },
});
export const {
  loadData,
  moviesReceived,
  error,
  dataOffsetIncrement,
  dataOffsetDecrement,
  dataOffsetToNull
} = moviesSlice.actions;
export const reducerMovies = moviesSlice.reducer;
