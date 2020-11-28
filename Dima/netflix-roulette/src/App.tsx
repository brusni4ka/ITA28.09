import FilmPage from 'Pages/FilmPage/FilmPage';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Route 
            exact path="/"
            component = { Home }
          />
          <Route
            path="/film/:id"
            component = { FilmPage }
          />
        </Router>
      </div>
    );
  };
};

export default App