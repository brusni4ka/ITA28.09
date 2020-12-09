
import React, { useState, useEffect } from 'react'
import Button from '../../Shared/Buttons/Button'
import { parse } from 'query-string'
import { useLocation } from 'react-router-dom'

interface ISortProps {
  handleSearchChange( { sortBy}: { sortBy: string } ): void,
  numberOfFilms: number,
};

enum ISortByParams {
  ReleaseDate = 'release_date',
  VoteAverage = 'vote_average'
}

export default function Sort (props: ISortProps) {

  const location = useLocation()
  
  const [sortBy, setSortBy] = useState(ISortByParams.ReleaseDate)

  useEffect(() => {
    const URLData = parse(location.search) as {
      sortBy: string;
    };
    let { sortBy } = URLData;
    if(sortBy) {
      setSortBy(sortBy === ISortByParams.ReleaseDate ? ISortByParams.ReleaseDate : ISortByParams.VoteAverage)
    }
  }, [location])

  function setSortState (value: ISortByParams) {
    setSortBy(value)
    return props.handleSearchChange({
      sortBy: value,
    });
  };

  return(
    <div className="sort__wrapp">
      <div className="sort__wrapp__content">
        <p>{ props.numberOfFilms } movies found</p>
        <div className="sort__wrapp__content__params">
          <p>Sort by</p>
          <Button 
            isActive = { sortBy === ISortByParams.ReleaseDate }
            buttonHandler = { () => setSortState(ISortByParams.ReleaseDate) }
            buttonContent = { 'release date' }
          />
          <Button
            isActive = { sortBy === ISortByParams.VoteAverage }
            buttonHandler = { () => setSortState(ISortByParams.VoteAverage) }
            buttonContent = { 'raiting' }
          />
        </div>
      </div>
    </div>
  );
};