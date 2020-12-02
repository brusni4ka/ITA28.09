import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import ErrorBoundary from '../src/Components/ErrorBoundary/ErrorBoundary'
import store from '../src/redux/store'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ErrorBoundary>
      <Provider store = { store }>
        <App />
      </Provider>
    </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
