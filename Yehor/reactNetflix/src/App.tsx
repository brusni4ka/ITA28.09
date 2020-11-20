import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import DetailedPage from "./pages/detailedPage";
import { moveEmitHelpers } from "typescript";
import IMovies from "./interfaces/IMovies";

class App extends React.Component<{}, IMovies> {
  state: IMovies = {
    movies: [],
  };

  componentDidMount() {
    fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then((response) => response.json())
      .then((receivedData) => {
        this.setState({ movies: receivedData.data });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <Router>
        <Route
          path="/"
          exact
          render={(props) => (
            <HomePage movies={movies} {...(props as RouteComponentProps)} />
          )}
        />
        <Route
          path="/DetailedPage/:id"
          render={(props) => <DetailedPage movies={movies} {...props} />}
        />
      </Router>
    );
  }
}

export default App;
