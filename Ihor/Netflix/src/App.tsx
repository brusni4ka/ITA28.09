import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import MoviePageMain from "../src/HomePage/MoviePageMain";
import MovieDetailsMain from "../src/MovieDetails/MovieDetailsMain";


const App = () => {

return (
  <div className="App">
    <Router>
      <Route
        exact
        path="/"
        component = {MoviePageMain}
      />
      <Route
        path="/movieinfo/:id"
        component = {MovieDetailsMain}
      />
    </Router>
  </div>
);
}


export default App;

