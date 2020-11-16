import React  from "react"
import "./searchBlock.styles.scss"

import { parse } from "query-string";

import {withRouter, RouteComponentProps, Link} from "react-router-dom"

import ButtonDefault from "../buttonDefault/buttonDefault.component"
import SortDetails from "../sort-details/sort-details.component"

    interface ISearchBlockProps extends  RouteComponentProps { 
        moviesDefault: [],
    }

    interface  ISearchBlockState {
        titleOrGenre: boolean,
        value: string,
        сolorActive: boolean, 
        colorActiveSort: boolean,
        moviesDefault: any,
        movies: any,
        numberFilms: number
    }

    class SearchBlock extends React.Component<ISearchBlockProps>{
        location = this.props.location
        history = this.props.history
        
        state = {
            titleOrGenre: true,
            сolorActive: true,

            value: "",

            isLoading: false,
           
            colorActiveSort: true,
            moviesDefault: [],
            movies: [],
            numberFilms: 0
        }


        componentDidMount = () => {

            this.setState({ isLoading: true });
        
            setTimeout(() => {
              const query = parse(this.props.location.search) as {
                titleOrGenre: string;
                search: string;
                sortBy: string;
              };
              const { titleOrGenre, search, sortBy } = query;
              const listOfMovies = this.state.movies
                .filter(
                  (movie: any) =>
                    movie[titleOrGenre] && movie[titleOrGenre] === search
                )
                .sort((a: any, b: any) => {
                  return b[sortBy] - a[sortBy];
                });
        
              this.setState({
                movies: listOfMovies,
                isLoading: false,
                // numberFilms: this.state.movies.length
                //   ? listOfMovies
                //   : this.state.movies.sort((prev, next) => prev.date - next.date),
              });
            }, 1000);
          };

        handleChangSortParam = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
            console.log("new value")
            this.setState({
                colorActiveSort: !this.state.colorActiveSort
            })
          }

        handleClickToggle = (e: React.MouseEvent) => {
            e.preventDefault()
            console.log("works")
            this.setState({
                titleOrGenre: !this.state.titleOrGenre,
                сolorActive: !this.state.сolorActive
            }) 
          }    
        
        handeleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("select")
        this.setState({value: e.target.value})
      }

        handleSubmit = (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLInputElement>)  => {
        e.preventDefault()
        console.log("submit")

        const {moviesDefault} = this.props
        const {titleOrGenre} = this.state
      
        if(titleOrGenre === true) {
      
            const filterMovies = [...moviesDefault]
            .filter((item: any) => item.title === this.state.value)
            .sort((prev: any, next: any) => prev.vote_average - next.vote_average).reverse()
            console.log(filterMovies)
            
            console.log(this.state.value) // ok
            this.setState({
                value: "",
                numberFilms: filterMovies.length,

                movies: filterMovies,
                renderResult: true
                
            })
           
            this.props.history.push({
                pathname: "/",
                search: `?titleOrGenre=${this.state.titleOrGenre}=title${true}name=${this.state.value}`
            })
      
        }else if(titleOrGenre === false) {
            //сделала костыльно, пределать !!
            const resfilterMoviesByGenre: any = []
      
            const filterMoviesByGenre = [...moviesDefault].forEach((item: any, index: number) => { 
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
                numberFilms: resfilterMoviesByGenre.length,

                movies: resfilterMoviesByGenre,
                renderResult: true
            })

            this.props.history.push({
                pathname: "/",
                search: `?titleOrGenre=${this.state.titleOrGenre}&ganre${true}name=${this.state.value}`
            })
        }   
      }

    render () {
        console.log(this.props.moviesDefault)
        console.log(this.state.movies)
        return (
            <div className="search__block">
                <form action="">
                    <h1>Find your movie</h1>
                    <div className="search__block__input-wrapper">
                        <div className="form__group field">
                        <input 
                        onChange={this.handeleChange}
                        type="text" 
                        className="form__field" 
                        placeholder="Name" 
                        name="name" id='name'
                        value={this.state.value} 
                        onKeyPress={this.handleSubmit} 
                        required 
                        />
                        <label  className="form__label">Search movies</label>
                        </div>
                    </div>
                    <div className="search__block-btn-wrapper">
                        <div className="search__block-btn">
                            <h3>Search by</h3>
                            <ButtonDefault 
                                className={
                                `button__default button__default-sm ${this.state.сolorActive ? 
                                'button__default-active' : ""}`} 
                                type="button" 
                                onClick={this.handleClickToggle}>
                                title
                            </ButtonDefault>
                            <ButtonDefault 
                                className={
                                    `button__default button__default-sm ${this.state.сolorActive ? 
                                    "" : 'button__default-active'}`}
                                type="button" 
                                onClick={this.handleClickToggle}>
                                genre
                            </ButtonDefault>
                        </div>
                        <ButtonDefault 
                            className="button__default button__default-search" 
                            type="submit" 
                            onClick={this.handleSubmit}
                        >search
                        </ButtonDefault>
                    </div>
                </form>
                <div>
                <SortDetails
                    moviesDefault={this.props.moviesDefault}
                    numberFilms={this.state.numberFilms}
                    handleChangSortParam={this.handleChangSortParam}
                    colorActiveSort={this.state.colorActiveSort}
                 />
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBlock)