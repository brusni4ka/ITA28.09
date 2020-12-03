import React from 'react';
import defaultImg from '../../assets/default.jpg'
import IImage from '../../interfaces/IImage'

export default function Image ({ filmImage, filmAlt }: IImage) {

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Error')
    const target = e.target as HTMLImageElement
    target.src = defaultImg
  } 

  return (
    <img 
        onError = { handleImgError }
        src={ filmImage } 
        alt={ filmAlt }
      />
  );
};