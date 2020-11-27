import React from "react";
import "./Header.css";
import Button from "../button";
import { Route, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2 className="header-title">netflixroulette</h2>
      <Route path="/DetailedPage">
        <Link to="/">
          <Button content={"search"} styleClass={"off"} />
        </Link>
      </Route>
    </header>
  );
}

export default Header;
