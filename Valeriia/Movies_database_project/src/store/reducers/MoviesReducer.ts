import { createSlice,PayloadAction} from '@reduxjs/toolkit'
//import {IRequestMoviesSuccessAction, IRequestMoviesWithLazyLoadingAction} from '../actions/moviesAction';

import {MoviesActionTypes} from '../../store/actions/actionTypes';
import {IMovie} from '../../types';


export interface IMoviesState{
  movies: IMovie[] | [];
  isLoading: boolean;
  isError: boolean;
}


const counterSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        onRequestSuccessMovies: (state: IMoviesState, action: any) => {
         state.movies= action.movies,
         state.isLoading = false
      },
    //   onRequestMoviesWithLazyLoading: (state: IMoviesState, action: IRequestMoviesWithLazyLoadingAction) => {
    //     state.movies = [...state.movies, ...action.movies],
    //     state.isLoading = false
    //   },
    //   onRequestErrorMovies: state => {
    //     state.isLoading = false,
    //     state.isError
    //   },
    //   onRequestMovies: state => {
    //     state.isLoading = true
    //   }
    }
  })
  
  export const reducer = counterSlice.reducer;

export const {onRequestSuccessMovies} = counterSlice.actions;
 
// const moviesReducer = (state = initialState, action: MoviesAction) => {
//     switch(action.type){
//         case MoviesActionTypes.ON_REQUEST_MOVIES_SUCCESS:{
//             return {
//                 ...state,
//                movies: action.movies,
//                isLoading: false
//             }
//         }

//         case MoviesActionTypes.ON_REQUEST_MOVIES_WITH_LAZY_LOADING:{
//             return {
//                 ...state,
//                movies: [...state.movies, ...action.movies],
//                isLoading: false
//             }
//         }

//         case MoviesActionTypes.ON_REQUEST_MOVIES_ERROR:{
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: action.error
//             }
//         }

//         case MoviesActionTypes.ON_REQUEST_MOVIES:{
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         }

//         default: return state;
//     }
   
// }

//export default moviesReducer;