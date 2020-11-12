import React from 'react'

const Search: React.FunctionComponent = () => {
  function activeHandler() {
    console.log("Active")
  }
  return(
    <div className="search">
      <h2>FIND YOUR MOVIE</h2>
      <input />
      <div className="search__menu">
        <div className="search__menu__params">
          <p>SEARCH BY</p>
          <button onClick={ activeHandler }>Title</button>
          <button onClick={ activeHandler }>Ganre</button>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  )
}

export default Search