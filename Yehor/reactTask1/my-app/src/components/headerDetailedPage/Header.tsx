import React from 'react';
import './Header.css';
import Button from '../../shared/button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h2 className="header-title">netflixroulette</h2>
            <Link to="/"><div><Button content={'Search'} handler={() => null}/></div></Link>
        </header>
    )
}

export default Header;