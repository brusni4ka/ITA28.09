import React from "react";
import {
  Route,Switch
} from "react-router-dom";
import MoviePageMain from "../src/HomePage/MoviePageMain";
import MovieDetailsMain from "../src/MovieDetails/MovieDetailsMain";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const App = () => {

return (
  <div className="App">
    <Switch>
      <Route
        exact
        path="/"
        component = {MoviePageMain}
      />
      <Route
        path="/search/"
        component = {MoviePageMain}
      />
      <Route
        path="/film/:id"
        component = {MovieDetailsMain}
      />
      <Route
        component = {NotFoundPage}
      />
    </Switch>
  </div>
);
}


export default App;

