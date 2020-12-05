import React from "react";
import "./NotFoundError.css";

interface INotFoundPageProps {
  error: string;
}

const NotFound = ( {error} : INotFoundPageProps) => (
  <div className="notFoundPage">
      <p>{error}</p>
  </div>
);

export default NotFound;