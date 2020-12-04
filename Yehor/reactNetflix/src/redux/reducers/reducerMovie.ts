import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { MovieTypes, IMovieAction, currentMovieLoad } from "../actions/movieActions";
import IMovie from "../../interfaces/IMovie";



// const loadMovie = createSlice({
//   name: MovieTypes.CurrentMovieLoad,
//   initialState: movietDefaultState,
//   reducers: {
//     load(action) {
//       action.payload.status
//       action.payload.id
//     }
//   }

// })



// const reducerMovies = (state = movietDefaultState, action: IMovieAction) => {
//   switch (action.type) {
//     case MovieTypes.CurrentMovieLoad: {
//       return {
//         ...state,
//         status: action.payload.status,
//         id: action.payload.id,
//       };
//     }
//     case MovieTypes.CurrentMovieReceived: {
//       return {
//         ...state,
//         status: action.payload.status,
//         movie: action.payload.movie,
//       };
//     }
//     case MovieTypes.CurrentMovieError: {
//       return {
//         ...state,
//         status: action.payload.status,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default reducerMovies;














// export interface IMoviesRequested {
//     sortBy: string,
//     offset: number,
//     searchBy?: string,
//     search?: string,
// }


// export interface IMoviesRecieved {
//     payload: IMovie[];

// }

// export interface ISelectedMovieRequested {
//   id: string;
// }

// export interface ISelectedMovieRecieved {
//   movie: IMovie;
// }
// export interface ISelectedMovieFailed {
//   error: string
// }

// export interface ILoadData {
//   offset: number;
//   sortBy: string;
//   searchBy: string;
//   search: string;
// }

// export interface ILoadedData {
//   movies: IMovie[];
// }

// interface IinitialState {
//     loading: boolean;
//     movies: IMovie[] ;
//     movie: IMovie | null;
//     error: string;
//     id: string;
//     sortBy: string;
//     offset: number;
//   }
//   const initialState: IinitialState = {
//     loading: false,
//     movies: [],
//     movie: null,
//     error: "",
//     id: "",
//     sortBy: "release_date",
//     offset: 0,
//   };

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
      // selectedMovieRequested(state:IinitialState,action:PayloadAction<ISelectedMovieRequested>){
      //   state.loading=true;
      //   state.id = action.payload.id;
      }
  })
  export const {currentMovieLoad, currentMovieReceived, currentMovieError} = movieSlice.actions

  // export const {moviesRequested,moviesRecieved,moviesFailed,selectedMovieRequested,selectedMovieRecieved,selectedMovieFailed,loadData,mergeData} = moviesSlice.actions;
 export const {reducer} = movieSlice;