import {combineReducers} from 'redux';
import  fetchReducer from './Reducers/FetchReducer';


export const rootReducer = combineReducers({
    movies: fetchReducer
});