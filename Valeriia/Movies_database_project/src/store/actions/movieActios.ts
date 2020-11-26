import {MovieActionTypes} from './actionTypes';

interface IInitMovie{
    type:MovieActionTypes.ON_INIT_MOVIE;
   
}

interface IUpdateMovie{
    type:MovieActionTypes.ON_UPDATE_MOVIE;
   
}

export const onInitMovie = (): IInitMovie => (
    {
    type: MovieActionTypes.ON_INIT_MOVIE,
  
});

export const onUpdateMovie = (): IUpdateMovie => ({
    type: MovieActionTypes.ON_UPDATE_MOVIE,
   
});

export type MovieAction = IInitMovie | IUpdateMovie