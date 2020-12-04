import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IMovie from "../../Interfaces/IMovie";

export interface IMoviesRequested {
  sortBy: string;
  offset: number;
  searchBy?: string;
  search?: string;
}

export interface IMoviesRecieved {}

export interface ISelectedMovieRequested {
  id: string;
}

export interface ISelectedMovieRecieved {
  movie: IMovie;
}
export interface ISelectedMovieFailed {
  error: string;
}

export interface ILoadData {
  offset: number;
  sortBy: string;
  searchBy: string;
  search: string;
}

export interface ILoadedData {
  movies: IMovie[];
}

interface IinitialState {
  loading: boolean;
  movies: IMovie[];
  movie: IMovie | null;
  error: string;
  id: string;
  sortBy: string;
  offset: number;
}
const initialState: IinitialState = {
  loading: false,
  movies: [],
  movie: null,
  error: "",
  id: "",
  sortBy: "release_date",
  offset: 0,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    moviesRequested(
      state: IinitialState,
      action: PayloadAction<IMoviesRequested>
    ) {
      state.loading = true;
      state.sortBy = action.payload.sortBy;
      state.offset = action.payload.offset;
    },
    moviesRecieved(state: IinitialState, action: PayloadAction<[IMovie]>) {
      state.loading = false;
      state.movies = [...action.payload];
    },
    moviesFailed(state: IinitialState) {
      state.loading = false;
    },
    selectedMovieRequested(
      state: IinitialState,
      action: PayloadAction<ISelectedMovieRequested>
    ) {
      state.loading = true;
      state.id = action.payload.id;
    },
    selectedMovieRecieved(state: IinitialState, action: PayloadAction<IMovie>) {
      state.loading = false;
      state.movie = action.payload;
    },
    selectedMovieFailed(state: IinitialState) {
      state.loading = false;
    },
    loadData(state: IinitialState, action: PayloadAction<ILoadData>) {
      state.offset = action.payload.offset;
    },
    mergeData(state: IinitialState, action: PayloadAction<[IMovie]>) {
      state.loading = false;
      state.movies = [...state.movies, ...action.payload];
    },
  },
});

export const {
  moviesRequested,
  moviesRecieved,
  moviesFailed,
  selectedMovieRequested,
  selectedMovieRecieved,
  selectedMovieFailed,
  loadData,
  mergeData,
} = moviesSlice.actions;
export const { reducer } = moviesSlice;
