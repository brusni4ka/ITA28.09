import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MoviePageMain from "../src/HomePage/MoviePageMain";
import MovieDetailsMain from "../src/MovieDetails/MovieDetailsMain";
import IMovie from "./Interfaces/IMovie";
interface IMovies {
  movies: IMovie[];
}

class App extends React.Component<{}, IMovies> {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then((response) => response.json())
      .then((receivedData) => {
        this.setState({ movies: receivedData.data });
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Router>
          <Route
            exact
            path="/"
            render={(props) => <MoviePageMain movies={movies} {...props} />}
          />
          <Route
            path="/movieinfo/:id"
            render={(props) => <MovieDetailsMain movies={movies} {...props} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
