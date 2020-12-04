import React from "react"
import "./card-movie.styles.scss"
import {Link} from "react-router-dom"

import {ICardMovie} from "../../interfaces/interfaces"


const CardMovie: React.FC<ICardMovie> = (props) => {
    
    const getOnlyYear = props.release_date.slice(0,4)

    const id = props.id
    const genre = props.genres

    const  switchToParticularPage = (e:React.MouseEvent<HTMLDivElement, MouseEvent> ) =>  {

    }


    return (
<div className="card__wrapper">
    <Link to={`/particularpage/${props.id}`}>
        <div>
            <div className="card__img-wrapper">
                <img src={props.poster_path} alt={props.title} />
            </div>
            <div className="card__details">
            <p>{props.title}</p>
            <p>{getOnlyYear}</p>
            </div>
            <div className="card__footer">
                {
                    props.genres.map((genre) => <span key={genre}>{`${genre} `}</span> )
                } 
            </div>  
        </div>
    </Link> 
</div>
    
    )
}

export default CardMovie