import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './homePage';
import DetailedPage from './detailedPage';
import { moveEmitHelpers } from 'typescript';

interface IMovie {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  genres: string[],
  runtime: number
}

interface IAppState {
  movies: IMovie[];
}

class App extends React.Component<{}, IAppState, IMovie> {

  state: IAppState = {
    movies: []
  }

  componentDidMount() {
    fetch('https://reactjs-cdp.herokuapp.com/movies')
      .then(response => response.json())
      .then(receivedData => {
        this.setState({ movies: receivedData.data })
      })
  }

  render() {
    const { movies } = this.state
    return (

      <Router>
        <Route path="/" exact render={(props) => <HomePage movies={movies} {...props}/>} />
        <Route path="/DetailedPage/:id" exact render={(props) => <DetailedPage movies={movies} {...props}/>} />
      </Router>
    );
  }
}

export default App;
