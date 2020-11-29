import React, { FC } from "react"
import "./film-details.styles.scss"

interface IFilmDetailsProps  {
    film?: any,
    id?: string

}

const FilmDetails: FC<IFilmDetailsProps> = (props) => {
    const id = props.id
    const film = props.film
    console.log(film)
    console.log(id)

return(
    <div className="film-details">
        {
            film.map((item: any) => <div key={item.id}>
                {item.title}
            </div> )
        }
        film details
    </div>
)
}

export default FilmDetails