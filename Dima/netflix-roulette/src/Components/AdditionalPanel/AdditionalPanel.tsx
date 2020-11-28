import React from 'react'

interface IGenreProps {
  genre: string
};

function AdditionalPanel({ genre }: IGenreProps) {
  return(
    <div className="sort__wrapp">
      <div className="sort__wrapp__content">
        <p>Films by {genre} genre</p>
      </div>
    </div>
  );
};

export default AdditionalPanel