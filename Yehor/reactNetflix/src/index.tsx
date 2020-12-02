import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
