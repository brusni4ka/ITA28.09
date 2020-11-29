import { createStore, combineReducers, applyMiddleware } from "redux";
import createSageMiddleware from 'redux-saga';
import reducerMovies from "./reducers/reducerMovies";
import reducerMovie from "./reducers/reducerMovie"
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
    movies: reducerMovies,
    movie: reducerMovie
})

const composeEnhancers = composeWithDevTools({trace:true});

const sagaMiddleware = createSageMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

export default store;



