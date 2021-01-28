import { createStore, combineReducers, applyMiddleware } from "redux";
import createSageMiddleware from "redux-saga";
import { reducer } from "./reducers/reducerMovie";
import { reducerMovies } from "./reducers/reducerMovies";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./rootSaga";
import {configureStore} from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  movies: reducerMovies,
  movie: reducer,
});

// const composeEnhancers = composeWithDevTools({ trace: true });

const sagaMiddleware = createSageMiddleware();
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga);

export default store;
