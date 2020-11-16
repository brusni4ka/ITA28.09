import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import FilmPage from './Pages/FilmPage/FilmPage'
import './scss/main.scss';

interface IFilm {
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
  genres: Array<string>,
  runtime: number
}

interface IAppState {
  films: IFilm[],
  number_of_films: number
}

export default class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    films: [],
    number_of_films: 0
  }
  getFilms = async (): Promise<void> => {
    try {
      const data: any = await (await fetch('https://reactjs-cdp.herokuapp.com/movies')).json()
      this.setState({ films: data.data, number_of_films: data.data.length })
    }
    catch(err) {
      console.error(err)
    }
  }

  componentDidMount() {
    this.getFilms()
  }
  render() {
    const { films } = this.state
    const { number_of_films } = this.state
  return (
    <div className="app">
      <Router>
          <Route 
            exact path="/"
            render = {(props) => <Home
              films={ films }
              number_of_films={ number_of_films }
              {...props}
              />}
          />
          <Route
            path="/film/:id"
            render = {(props) => <FilmPage
              films={ films }
              {...props}
              />}
          />
      </Router>
    </div>
  );
  }
}