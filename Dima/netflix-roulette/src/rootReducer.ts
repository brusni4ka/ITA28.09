import { combineReducers } from 'redux';
import requestReduser from './redux/Redusers/requestReduser';


export const rootReducer = combineReducers({
  films: requestReduser
});