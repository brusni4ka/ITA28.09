import React, {useState, useEffect} from 'react';
import "./previewMovies.styles.scss"
import CardMovie from '../card-movie/card-movie.component';

import { IMoviesDefault } from "../../interfaces/interfaces"

export interface IPreviewMoviesState {
    moreMovies:  boolean
} 

export  interface IPreviewMoviesProps {
    // handleChangSortParam?: any, // с void get error if it is function
    movies: [] ,
    // colorActiveSort?: boolean,
}


const PreviewMovies: React.FC<IPreviewMoviesProps> = ({movies}) => {

    const [allMovies, setMoreItems] = useState<IPreviewMoviesState>({moreMovies: false})

    const  loadMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("load")
        setMoreItems({
            moreMovies: true
        })
    }

    console.log(movies)  // ок

    return(
        <div className="preview__movies-wrapper">
            <div className="preview__movies-card-wrapper">
                { 
                movies
                .filter((item: any, index: number) => index < 9)
                .map(({id, genres, title, release_date, ...item} : IMoviesDefault) =>
                
                <CardMovie 
                    key={id} 
                    genres={genres}
                    title={title}
                    release_date={release_date}
                    id={id}
                    {...item}
                /> 
                )}
                <div className="preview__movies-card-wrapper">
                {
                    allMovies.moreMovies ? 
                        movies
                        .filter((item: any, index: number) => index + 9)
                        .map(({id, genres, title, release_date, ...item}
                                : IMoviesDefault) => <CardMovie 
                            key={id} 
                            genres={[...genres]}
                            title={title}
                            release_date={release_date}
                            {...item}
                        /> ) : <div></div>
                }
                </div>
            </div>
            <div className="preview__movies-loadMore-btn-wrapper">
                <button 
                    className="preview__movies-loadMore-btn" 
                    onClick={loadMore}>
                        load more
                </button>
            </div>
        </div>
    )
}
    
export default PreviewMovies