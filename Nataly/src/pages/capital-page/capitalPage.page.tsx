import React  from "react"

import Header from "../../components/header/header.component"
import PreviewMovies from "../../components/previewMovies/previewMovies.component"
import SearchBlock from "../../components/searchBlock/searchBlock.component"
import Footer from "../../components/footer/footer.component"
import ErrorEmptyResults from "../../components/error-empty-results/error-empty-results.component"

import {sections} from "../../directory.data"

import UserSelectedMovies from "../../components/user-selected-movies/userSelectedMovies.component"
import SortDetails from "../../components/sort-details/sort-details.component"
import { sortAndDeduplicateDiagnostics } from "typescript"


interface ICapitalPageState {
    value: string,
    hidden: boolean,

    сolorActive: boolean, 

    colorActiveSort: boolean,

    titleOrGenre: boolean,

    rating: boolean,
    release_data: boolean,

    number_of_films: number,

    moviesDefault: any // [] дает ошибку!!!!
    
    movies: any,

    renderResult: boolean,

    handleChangSortValue?: any,
}

const rest = fetch('http://reactjs-cdp.herokuapp.com/movies')
.then(res => res.json())
.then(res => console.log(res.data))

class CapitalPage extends React.Component<{}, ICapitalPageState> {
    
    data: any = sections.data 

    state: ICapitalPageState = {
        value: "",
        hidden: false,
        сolorActive: true, 
        colorActiveSort: true,
        titleOrGenre: true,
        rating: true,
        release_data: false,
        number_of_films: 0,

        moviesDefault: [],
        movies: [],

        renderResult: false,
    }

    componentDidMount(){
        setTimeout(() => {
            fetch('http://reactjs-cdp.herokuapp.com/movies')
            .then(res => res.json())
            .then(res => 
                this.setState({moviesDefault: res.data}))
        }, 1000)
        
    }

    

    handleClickToggle = (e: React.MouseEvent) => {
        e.preventDefault()
        console.log("works")
        this.setState({
            titleOrGenre: !this.state.titleOrGenre,
            сolorActive: !this.state.сolorActive
        }) 
    }


    handleChangSortValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        console.log("new value")
        this.setState({
            colorActiveSort: !this.state.colorActiveSort
        })
    }

    handleSubmit = (e: React.MouseEvent<Element, MouseEvent>)  => {
        e.preventDefault()
        console.log("submit")
        const {moviesDefault,  movies, titleOrGenre} = this.state
 
        if(titleOrGenre === true) {

            const filterMovies = [...moviesDefault]
            .filter((item: any) => item.title === this.state.value)
            .sort((prev: any, next: any) => prev.vote_average - next.vote_average).reverse()
            console.log(filterMovies)
            
            console.log(this.state.value) // ok
            this.setState({
                value: "",
                number_of_films: filterMovies.length,
                movies: filterMovies,
                renderResult: true
                
            })

        }else if(titleOrGenre === false) {
            //сделала костыльно, пределать !!
            const resfilterMoviesByGenre: any = []

            const filterMoviesByGenre = [...moviesDefault]
            .forEach((item: any, index: number) => { 
              let val =  item.genres.some((genre: any, index: number, arr: []) => {
                    if(genre === this.state.value) {
                        resfilterMoviesByGenre.push(item)
                        return  item
                    }
                })   
                if(val === false) {return}

            return item
                  
            })
            console.log(resfilterMoviesByGenre)

            resfilterMoviesByGenre.sort((prev: any, next: any) => prev.vote_average - next.vote_average).reverse()
            console.log(this.state.value) // ok
            this.setState({
                value: "",
                number_of_films: resfilterMoviesByGenre.length,
                movies: resfilterMoviesByGenre,
                renderResult: true
            })
        
        
        }
        
           
    }

    handeleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("select")
        this.setState({value: e.target.value})
    }

    
    render () {
        const {handleChangSortValue, number_of_films, moviesDefault, colorActiveSort, renderResult, movies } = this.state
        return (
            <div>
                <Header />
                <SearchBlock
                    сolorActive={this.state.сolorActive}
                    value={this.state.value}
                    handeleChange={this.handeleChange}
                    handleSubmit={this.handleSubmit}
                    handleClickToggle={this.handleClickToggle}
                   
                />
                <SortDetails
                    moviesDefault={moviesDefault}
                    number_of_films={number_of_films}
                    handleChangSortValue={handleChangSortValue}
                    colorActiveSort={colorActiveSort}

                 />

                {
                    renderResult ? 
                    <UserSelectedMovies 
                        movies={movies}
                        number_of_films={number_of_films}
                    />
                    :
                    <PreviewMovies 
                        handleChangSortValue={this.handleChangSortValue}
                        number_of_films={number_of_films}
                        moviesDefault={moviesDefault}
                        colorActiveSort={colorActiveSort}
                    /> 
                }        
                <Footer />
            </div>
        )
    }
}

export default CapitalPage