import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.scss";
import Layout from "./components/Layout";
import MovieDetails from "./pages/MovieDetails";
import NotFoundPage from "./pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />

          <Route
            path="/film/:id"
            render={(props) => <MovieDetails {...props} />}
          />
          <Route render={() => <NotFoundPage />} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
