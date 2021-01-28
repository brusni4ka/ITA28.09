import React from "react";
import "./Header.css";
import Button from "../button";
import { Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  dataOffsetToNull
} from "../../redux/reducers/reducerMovies";

function Header() {
  const dispatch = useDispatch()
  return (
    <header>
      <Link to="/" onClick={() => dispatch(dataOffsetToNull())}><h2 className="header-title">netflixroulette</h2></Link>
      <Route path="/film">
        <Link to="/">
          <Button content={"search"} styleClass={"off"} />
        </Link>
      </Route>
    </header>
  );
}

export default Header;
