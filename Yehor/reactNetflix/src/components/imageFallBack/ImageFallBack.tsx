import React from "react";

interface IImageFallBackProps {
    posterPic: string,
    defaultPic: string,
    alt: string,
    style?: string
}

function ImageFallBack ({posterPic, defaultPic, alt, style}: IImageFallBackProps) {

    const defimg = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        target.src = defaultPic;
      }
    
    return (
        <img src={posterPic} alt={alt} onError={defimg} className={style}/>
    )
}

export default ImageFallBack;