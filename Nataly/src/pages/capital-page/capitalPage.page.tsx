import React  from "react"

import Header from "../../components/header/header.component"
import PreviewMovies from "../../components/previewMovies/previewMovies.component"
import SearchBlock from "../../components/searchBlock/searchBlock.component"
import Footer from "../../components/footer/footer.component"
import ErrorEmptyResults from "../../components/error-empty-results/error-empty-results.component"

import UserSelectedMovies from "../../components/user-selected-movies/userSelectedMovies.component"
import SortDetails from "../../components/sort-details/sort-details.component"
import ParticularFilm from "../particular-film/particularFilm.page"

interface ICapitalPageProps {

    moviesDefault: any // [] дает ошибку!!!!
}


const  CapitalPage: React.FC<ICapitalPageProps>  = (props) => {
  
        const {
            moviesDefault
        } = props

        return (
            <div>
                <SearchBlock
                moviesDefault={moviesDefault}
                    // сolorActive={сolorActive}
                    // value={value}
                    // handeleChange={handeleChange}
                    // handleSubmit={handleSubmit}
                    // handleClickToggle={handleClickToggle}
                   
                />
                {/* {
                    renderResult ? 
                    <UserSelectedMovies 
                        moviesDefault={moviesDefault}
                        movies={movies}
                        number_of_films={number_of_films}
                    />
                    :
                    <PreviewMovies 
                        moviesDefault={moviesDefault}
                    /> 
                }         */}
            </div>
        )
    
}

export default CapitalPage