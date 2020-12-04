import React, {useEffect, useState}  from "react"
import {connect, useDispatch, useSelector, ConnectedProps } from "react-redux";

import PreviewMovies from "../../components/previewMovies/previewMovies.component"
import SearchBlock from "../../components/searchBlock/searchBlock.component"

import ErrorEmptyResults from "../../components/error-empty-results/error-empty-results.component"

import UserSelectedMovies from "../../components/user-selected-movies/userSelectedMovies.component"
import SortDetails from "../../components/sort-details/sort-details.component"
import ParticularFilm from "../particular-film/particularFilm.page"

import {moviesFetchStartAction} from "../../redux/movies/movies.actions"
import {InitialState} from "../../redux/movies/moviesReducer"

// const PreviewMovies  = () => React.lazy(() => import("../../components/previewMovies/previewMovies.component"))

interface RootState {
    movies: any,
    renderResult: boolean
    // movies: []  
}

// interface ICapitalPageProps {
//     movies: any // [] дает ошибку!!!!
//     moviesFetchStartAction(): void
// }

// const mapStateToProps = (state: RootState) => ({
//     movies: state.movies.movies,
//     renderResult: state.movies.renderResult
// })

// const mapDispatchToProps = (dispatch: any) => ({ 
//     moviesFetchStartAction: () => dispatch(moviesFetchStartAction())
// }) 

// const connector = connect(mapStateToProps, mapDispatchToProps)
// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux 


const  CapitalPage: React.FC = () => {

// >>>>>>>>>>>start hooks redux
    const dispatch = useDispatch()
    const movies: [] = useSelector((state: RootState ) => state.movies.movies)
    const renderResult: boolean = useSelector((state: RootState) => state.movies.renderResult )

    useEffect(() => {
        dispatch(moviesFetchStartAction()) // works
    }, [])
    console.log(movies)
// >>>>>>>>>>>>>> end hooks 

        return (
            <div>
                <SearchBlock/> 
                { 
                    renderResult ? 

                    <UserSelectedMovies 
                        moviesDefault={movies}
                    />
                    
                    :

                    <PreviewMovies movies={movies}/> 
                }        
                <div></div>
            </div>
    )  
}


export default CapitalPage



