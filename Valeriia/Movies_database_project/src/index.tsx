import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { IMoviesState } from "./store/reducers/MoviesReducer";
import moviesReducer from "./store/reducers/MoviesReducer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/ErrorBoundary";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export interface IRootState {
  movies: IMoviesState;
}
const composeEnhancers = composeWithDevTools({ trace: true });
const store = createStore(rootReducer, composeEnhancers());

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
