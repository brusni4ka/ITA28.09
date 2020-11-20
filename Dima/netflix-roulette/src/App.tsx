import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import FilmPage from './Pages/FilmPage/FilmPage'
import IState from './interfaces/IState'
import './scss/main.scss';

export default class App extends React.Component<{}, IState> {
  state: IState = {
    films: [],
    //remove number_off DONE!!!!!!!!!!!!!!!!
  };

  getFilms = async (): Promise<void> => {
    try {
      const data: any = await (await fetch('https://reactjs-cdp.herokuapp.com/movies')).json();
      this.setState({ films: data.data });
    }
    catch(err) {
      console.error(err);
    };
  };

  componentDidMount() {
    this.getFilms();
  };

  render() {
    const { films } = this.state
    return (
      <div className="app">
        <Router>
          <Route 
            exact path="/"
            render = { (props) => <Home
              films={ films }
                { ...props }
              /> 
            }
          />
          <Route
            path="/film/:id"
            render = { (props) => <FilmPage
              films={ films }
                { ...props }
              />
            }
          />
        </Router>
      </div>
    );
  };
};