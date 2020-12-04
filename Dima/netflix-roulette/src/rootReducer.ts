import { combineReducers } from 'redux';
import { reducer } from './redux/Redusers/requestReduser';


export const rootReducer = combineReducers({
  films: reducer
});