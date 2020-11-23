import React, {useEffect, useState, }  from "react"
import {connect, useDispatch, useSelector, ConnectedProps } from "react-redux";
// import {useDispatch} from 'redux'

import PreviewMovies from "../../components/previewMovies/previewMovies.component"
import SearchBlock from "../../components/searchBlock/searchBlock.component"

import ErrorEmptyResults from "../../components/error-empty-results/error-empty-results.component"

import UserSelectedMovies from "../../components/user-selected-movies/userSelectedMovies.component"
import SortDetails from "../../components/sort-details/sort-details.component"
import ParticularFilm from "../particular-film/particularFilm.page"

import {moviesFetchStartAction, moviesFetchDataActionSuccess} from "../../redux/movies/movies.actions"


// interface RootState {
//     movies: any
//     moviesDefault: []  
// }

// interface ICapitalPageProps {

//     moviesDefault: any // [] дает ошибку!!!!
//     moviesFetchStartAction(): void
// }

// const mapStateToProps = (state: RootState) => ({
//     moviesDefault: state.movies.moviesDefault
// })


// const mapDispatchToProps = (dispatch: any) => ({ 
//     moviesFetchStartAction: () => dispatch(moviesFetchStartAction())
    
// }) 

// const connector = connect(mapStateToProps,mapDispatchToProps)
// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux & {
//     backgroundColor: string
//   }


const  CapitalPage: React.FC = (props: any) => {

    useEffect(() => {
        moviesFetchDataActionSuccess()
    }, [])

        const {moviesDefault} = props
        console.log(props)
        console.log(moviesDefault)
////////////////////////////////////////////////////////////////////////////////////////
    //     const [movies, setMoviesDefault] = useState({
    //         moviesDefault : []
    //     })
      
    //     useEffect( () => { 
    //         const fetchData = async() => {
    //             const movies = await  fetch('http://reactjs-cdp.herokuapp.com/movies')
    //             const res = await movies.json()
    //             const onlyMovies = res.data
    //             setMoviesDefault({moviesDefault: onlyMovies})
    //     }
    //     fetchData()
    // }, []) 
    //     const {moviesDefault} = movies
    //     console.log(moviesDefault) // done
///////////////////////////////////////////////////////////////////////////////////////////////

        return (
            <div>
                capital 
                <SearchBlock
                moviesDefault={moviesDefault} 
                    // сolorActive={сolorActive}
                    // value={value}
                    // handeleChange={handeleChange}
                    // handleSubmit={handleSubmit}
                    // handleClickToggle={handleClickToggle} */}
                   
                 /> 
                {/* { 
                    renderResult ? 
                    <UserSelectedMovies 
                        moviesDefault={moviesDefault}
                        // movies={movies}
                        // number_of_films={number_of_films}
                    />
                    :
                    <PreviewMovies 
                        moviesDefault={moviesDefault}
                    /> 
                }         */}

                <div>

                </div>
            </div>
        )
     
}


// export default connector(CapitalPage)


const mapStateToProps = (state: any) => ({
    moviesDefault: state.movies.movielsdefault
})


const mapDispatchToProps = (dispatch: any) => ({ 
    moviesFetchStartAction: () => dispatch(moviesFetchStartAction()),
    moviesFetchDataActionSuccess: () =>  dispatch(moviesFetchDataActionSuccess())
}) 

export default connect(mapStateToProps,  mapDispatchToProps)(CapitalPage)

// export default CapitalPage