import FilmPage from 'Pages/FilmPage/FilmPage';
import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route 
            exact path="/"
            component = { Home }
          />
          <Route 
            path="/search/"
            component = { Home }
          />
          <Route
            path="/film/:id"
            component = { FilmPage }
          />
          <Route 
            path = '/*'
            component = { Home }
          />
        </Switch>
      </div>
    );
  };
};

export default App