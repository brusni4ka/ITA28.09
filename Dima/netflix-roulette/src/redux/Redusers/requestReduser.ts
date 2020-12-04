// import { RequestActions } from './../Actions/requestActions';
// import IFilm from '../../interfaces/IFilm'

// export enum RequestActionsTypes {
//   FILMS_REQUESTED = 'FILMS_REQUESTED',
//   FILMS_RECIEVED = 'FILMS_RECIEVED',
//   FILMS_FAILED = 'FILMS_FAILED',
//   CURRENTFILM_REQUESTED = 'CURRENTFILM_REQUESTED',
//   CURRENTFILM_RECIEVED = 'CURRENTFILM_RECIEVED',
//   CURRENTFILM_FAILED = 'CURRENTFILM_FAILED',
//   PAGINATION_RECIEVED = 'PAGINATION_RECIEVED',
//   PAGINATION_FAILED = 'PAGINATION_FAILED'
// }

// interface IInitialState {
//   loading: boolean,
//   films: IFilm[] | [],
//   currentFilm: IFilm | null,
//   error: string,
//   sortBy: string,
// }

// const initialState: IInitialState = {
//   loading: false,
//   films: [],
//   currentFilm: null,
//   error: '',
//   sortBy: 'release_date',
// }

// const requestReduser = (state = initialState, action: RequestActions) => {
//   switch(action.type) {
//     case 'FILMS_REQUESTED': 
//       return {
//         ...state,
//         loading: true,
//         sortBy: action.payload.sortBy
//       };
//     case 'FILMS_RECIEVED':
//       return {
//         ...state,
//         loading: false,
//         films: action.payload
//       };
//     case 'FILMS_FAILED': 
//       return {
//         ...state,
//         loading: false,
//       };
//     case 'CURRENTFILM_REQUESTED': 
//       return {
//         ...state,
//         loading: true,
//         id: action.payload
//       }
//     case 'CURRENTFILM_RECIEVED': 
//       return {
//         ...state,
//         loading: false,
//         currentFilm: action.payload,
//       }
//     case 'CURRENTFILM_FAILED': 
//       return {
//         ...state,
//         loading: false,
//       }
//     case 'PAGINATION_RECIEVED':
//       return {
//         ...state,
//         loading: false,
//         films: [...state.films, ...action.payload],
//       }
//     case 'PAGINATION_FAILED': 
//     return {
//       ...state
//     }
//     default: return state;
//   };
// };

// export default requestReduser

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