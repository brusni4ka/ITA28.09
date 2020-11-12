import React from 'react'

interface ISortProps {
  number_of_films: number
}

export default function Sort({ number_of_films }: ISortProps){
  return(
    <div className="sort__wrapp">
      <div className="sort__wrapp__content">
        <p>{number_of_films} movies found</p>
        <div className="sort__wrapp__content__params">
          <p>Sort by</p>
          <button>release date</button>
          <button>rating</button>
        </div>
      </div>
    </div>
  )
}