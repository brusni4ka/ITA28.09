import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <Link to="/">
      <div className="top__header">
        <p>netflixroulette</p>
      </div>
    </Link>
  );
}