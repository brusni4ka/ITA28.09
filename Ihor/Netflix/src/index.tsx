import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../src/App';
import {Provider} from 'react-redux';
import store from '../src/redux/store';
import ErrorBoundary from './Shared/ErrorBoundary';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ErrorBoundary>
      <Provider store = {store}>
        <App/>
      </Provider>
    </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

