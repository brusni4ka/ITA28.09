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
          <Route path="/" exact component={HomePage} />
          <Route path="/film/:id" component={MovieDetails} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
