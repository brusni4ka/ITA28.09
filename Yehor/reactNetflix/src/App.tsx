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

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/DetailedPage/:id" component={DetailedPage} />
      </Router>
    );
  }
}

export default App;
