import React from 'react';

import './input.css';

const SInput: React.FC = () => {
    return (
        <>
        <p className="findmovie">FIND YOUR MOVIE</p>
        <input type = "text" className="search-input" placeholder="type to search" ></input>
        </>
    )
}

export default SInput;