import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import IFilm from "../../interfaces/IFilm";

export interface IFilmsRequested {
  offset: number,
  sortBy: string,
  searchBy?: string,
  search?: string,
  pagination?: boolean,
};
export interface IFilmsRecieved {
  payload: IFilm[];
};

export interface ICurrentFilmRequested {
  id: string;
};
export interface ICurrentFilmRecieved {
  film: IFilm;
};
export interface ICurrentFilmFailed {
  error: string
}

export interface IPaginationRecieved {
  films: IFilm[]
}

interface IInitialState {
  loading: boolean,
  films: IFilm[] | [],
  currentFilm: IFilm | null,
  error: string,
  sortBy: string,
  total: number
}

const initialState: IInitialState = {
  loading: false,
  films: [],
  currentFilm: null,
  error: '',
  sortBy: 'release_date',
  total: 0,
}

  const filmsSlice = createSlice({
    name: 'films',
    initialState ,
    reducers: {
      filmsRequested(state:IInitialState, action:PayloadAction<IFilmsRequested>) {
        state.loading = true;
        state.sortBy = action.payload.sortBy;
        // state.total = action.payload.
      },
      filmsRecieved:(state:IInitialState,action:PayloadAction<Array<IFilm>>) => {
        state.films = [...action.payload]
      },
      filmsFailed(state:IInitialState) {
        state.loading = false;
      },
      currentFilmRequested(state:IInitialState,action:PayloadAction<ICurrentFilmRequested>){
        state.loading = true;
      },
      currentFilmRecieved(state:IInitialState,action:PayloadAction<IFilm>){
        state.loading=false;
        state.currentFilm = action.payload
      },
      currentFilmFailed(state:IInitialState){
        state.loading=false;
      },
      paginationRecieved(state:IInitialState,action:PayloadAction<Array<IFilm>>){
        state.films = [...state.films, ...action.payload]
      }
    }
  })

  export const { filmsRequested, filmsRecieved, filmsFailed,currentFilmRequested, currentFilmRecieved, currentFilmFailed,paginationRecieved } = filmsSlice.actions;
 export const {reducer, actions} = filmsSlice;
