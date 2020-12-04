import React from "react";
import { Link } from "react-router-dom";
import "./MovieHeader.css";

const MovieHeader = () => {
  return (
    <div className="movie_header">
      <h3 className="logo">netflixroulette</h3>
      <Link to="/">
        <button className="search_quit">SEARCH</button>
      </Link>
    </div>
  );
};

export default MovieHeader;
