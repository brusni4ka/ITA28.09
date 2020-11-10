import React from 'react';
import "./previewMovies.styles.scss"
import CardMovie from '../card-movie/card-movie.component';

import {IPreviewMoviesProps, IMoviesDefault, IPreviewMoviesState} from "../../interfaces/interfaces"



class PreviewMovies extends React.Component<IPreviewMoviesProps, IPreviewMoviesState,  IMoviesDefault> {
    state = {
        moreItem: false
    } 

    loadMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("load")
            this.setState({
                moreItem: true
            })
    }

    render () {

        const {moviesDefault} = this.props

    return(
    <div className="preview__movies-wrapper">
       
        <div className="preview__movies-card-wrapper">
            { 
            moviesDefault
            .filter((item, index) => index < 9)
            .map(({id, genres, title, release_date, ...item} : IMoviesDefault) => <CardMovie 
            key={id} 
            genres={genres}
            title={title}
            release_date={release_date}
            {...item}
            /> )
            }

            <div className="preview__movies-card-wrapper">
            {
                this.state.moreItem ? 
            moviesDefault
            .filter((item, index) => index + 9)
            .map(({id, genres, title, release_date, ...item} : IMoviesDefault) => <CardMovie 
            key={id} 
            genres={[...genres]}
            title={title}
            release_date={release_date}
            {...item}
            /> ) : <div></div>

            }
            </div>
            <button className="preview__movies-loadMore-btn" onClick={this.loadMore}>load more</button>
        </div>
    </div>
)
    }
    }
export default PreviewMovies