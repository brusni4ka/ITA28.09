import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return <Link to="/"><h3 className="logo">netflixroulette</h3></Link>;
};

export default Header;
