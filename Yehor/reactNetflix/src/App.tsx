import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import DetailedPage from "./pages/detailedPage";
import NotFoundErrorBlock from "./components/notFoundErrorBlock"
import { moveEmitHelpers } from "typescript";
import IMovies from "./interfaces/IMovies";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={HomePage} />
        <Route path="/film/:id" component={DetailedPage} />
        <Route component={NotFoundErrorBlock} />
      </Switch>
    );
  }
}

export default App;
