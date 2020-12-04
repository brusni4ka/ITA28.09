import React from "react";
import "./NoMoviesFound.css";

interface INoMoviesFoundProps {
  message: string;
}

const NoMoviesFound = ({ message }: INoMoviesFoundProps) => (
  <div className="noMoviesFound">
    <h2>{message}</h2>
  </div>
);

export default NoMoviesFound;
