import React from "react"
import "./card-movie.styles.scss"

import {ICardMovie} from "../../interfaces/interfaces"


const CardMovie: React.FC<ICardMovie> = (props) => {
    
    const getOnlyYear = props.release_date.slice(0,4)

    return (
        <div className="card__wrapper">
            <div className="card__img-wrapper">
                <img src={props.poster_path} alt="movies"/>
            </div>
            <div className="card__details">
            <p>{props.title}</p>
            <p>{getOnlyYear}</p>
            </div>
            <div className="card__footer">
                {
                    props.genres.map((item) => <span key={item}>{`${item} `}</span> )
                }
            
            </div>

        </div>
    )
}

export default CardMovie