import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IMovie} from '../../types';

export interface IRequestMoviesSuccessAction{
  movies:IMovie[] | [] ;
}

interface IRequestMoviesErrorAction{
  error: boolean
}

export interface IRequestMoviesWithLazyLoadingAction{
  movies: IMovie[] | []
}

export interface IRequestMoviesAction{
  type: string,
  payload: {
    sortByType: string;
    searchBy?: string;
    searchValue?: string;
    offset?: number;
    isLazyLoading?: boolean
  }
}

export interface IMoviesState{
  movies: IMovie[] | [];
  isLoading: boolean;
  isError: boolean;
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
      onRequestMovies(movies){
        movies.isLoading = true
      },
      onRequestSuccessMovies(movies: IMoviesState, action: PayloadAction<IRequestMoviesSuccessAction>){
        movies.movies = action.payload.movies
      },
      onRequestMoviesWithLazyLoading(movies: IMoviesState, action: PayloadAction<IRequestMoviesWithLazyLoadingAction>){
        movies.movies = [...movies.movies, ...action.payload.movies]
        movies.isLoading = false
      },
      onRequestErrorMovies(movies: IMoviesState,action: PayloadAction<IRequestMoviesErrorAction>){
        movies.isLoading = false
        movies.isError = action.payload.error;
      },
     
    }
  })

  export const {onRequestSuccessMovies, onRequestMovies,onRequestMoviesWithLazyLoading,onRequestErrorMovies} = moviesSlice.actions;
  export default moviesSlice.reducer;
