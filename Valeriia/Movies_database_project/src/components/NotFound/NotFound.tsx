import React from "react";
import "./NotFound.scss";

interface INotFoundProps {
  message: string;
}

const NotFound = ({ message }: INotFoundProps) => (
  <div className="notFound">
    <div className="notFound__message">
      <p>{message}</p>
    </div>
  </div>
);

export default NotFound;
