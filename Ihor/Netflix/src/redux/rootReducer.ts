import {combineReducers} from 'redux';
import  {reducer}from './Reducers/FetchReducer';

export const rootReducer = combineReducers({
    movies: reducer
});