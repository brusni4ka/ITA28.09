import React from 'react';
import './App.css';
import Header from './components/header';
import SearchPanel from './components/search-panel'
import SortPanel from './components/sort-panel';
import Main from './components/main';
import Footer from './components/footer';
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

class App extends React.Component<{}, IAppState> {

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
      <>
        <div className="wrapper">
          <div className="blur">
            <div className="top-container">
              <Header />
              <SearchPanel />
            </div>
          </div>
        </div>
        <div className="sort-wrapper">
          <div className="top-container">
            <SortPanel movies={movies} />
          </div>
        </div>
        <div className="main-container">
          <Main movies={movies} />
        </div>
        <div className="wrapper-footer">
          <div className="main-container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
