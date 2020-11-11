import React from 'react';

import './search-filter-btns.css';


const SearchFilterBtns: React.FC  = () => {
    return (
        <>
            <p className="search">SEARCH BY</p>
            <button className="title_btn">TITLE</button>
            <button className="genre_btn">GENRE</button>
        </> 
    )
   
}

export default SearchFilterBtns;