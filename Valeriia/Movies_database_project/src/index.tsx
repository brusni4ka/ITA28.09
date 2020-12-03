import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
//import { IMoviesState } from "./store/reducers/MoviesReducer";
import { reducer, IMoviesState } from "./store/reducers/MoviesReducer";
import movieReducer from "./store/reducers/MovieReducer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/ErrorBoundary";
import { IMovieDetailsState } from "./store/reducers/MovieReducer";
import rootSaga from "./store/sagas/rootSaga";
import { IMovie } from "./types";

const rootReducer = combineReducers({
  movies: reducer,
  movie: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export interface IRootState {
  movies: IMoviesState;
}

export interface IRootMovieState {
  movie: IMovieDetailsState;
  movies: {
    movies: IMovie[];
    isLoading: boolean;
    isError: boolean;
  };
}

const composeEnhancers = composeWithDevTools({ trace: true });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
