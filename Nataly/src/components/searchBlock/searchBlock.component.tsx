import React, {useState, useEffect}  from "react"
import "./searchBlock.styles.scss"

import { parse } from "query-string";

import {withRouter, RouteComponentProps, Link} from "react-router-dom"

import ButtonDefault from "../buttonDefault/buttonDefault.component"
import SortDetails from "../sort-details/sort-details.component"

    interface ISearchBlockProps extends  RouteComponentProps { 
        moviesDefault: any,
    }

    interface  ISearchBlockState {
        titleOrGenre?: boolean,
        value?: string,
        сolorActive?: boolean, 
        colorActiveSort?: boolean,
        movies?: any,
        isLoading?: boolean,
        renderResult?: boolean
    }

    const  SearchBlock: React.FC<ISearchBlockProps> = (props) => {
       const location = props.location
       const history = props.history

        const {moviesDefault} = props 
        console.log(moviesDefault)

        const [searchBlockstate, setSearchBlockState] = useState<ISearchBlockState>({
            titleOrGenre: true,
            сolorActive: true,
            value: "",
            isLoading: false,
            colorActiveSort: true,
            movies: [],
            // numberFilms: 0,
            renderResult: false
        })

        const {
            titleOrGenre,
            сolorActive,
            value,
            isLoading,
            colorActiveSort,
            movies,
            // numberFilms,
            renderResult
        } = searchBlockstate

        // useEffect(() => {

        //     setSearchBlockState({isLoading: true });
        
        //     () => {
        //       const query = parse(props.location.search) as {
        //         titleOrGenre: string;
        //         search: string;
        //         sortBy: string;
        //       };
        //       const { titleOrGenre, search, sortBy } = query;
        //       const listOfMovies = searchBlockstate.movies
        //         .filter(
        //           (movie: any) =>
        //             movie[titleOrGenre] && movie[titleOrGenre] === search
        //         )
        //         .sort((a: any, b: any) => {
        //           return b[sortBy] - a[sortBy];
        //         });
        
        //         setSearchBlockState({
        //             movies: listOfMovies,
        //             isLoading: false,
        //         //   ? listOfMovies
        //         //   : movies.sort((prev: any, next: any) => prev.date - next.date),
        //       });
        //     };
        //   });


        const  handleChangSortParam = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ): void => {
            console.log("new value")
            setSearchBlockState({
                colorActiveSort: !searchBlockstate.colorActiveSort
            })
          }
        

        const handleClickToggle = (e: React.MouseEvent) => {
            e.preventDefault()
            console.log("works")
            setSearchBlockState({
                titleOrGenre: !searchBlockstate.titleOrGenre,
                сolorActive: !searchBlockstate.сolorActive
            }) 
          }    
        
         const handeleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("select")
            setSearchBlockState({value: e.target.value})
            console.log(value)
        }

        const handleSubmit = (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLInputElement>)  => {
            e.preventDefault()
            console.log("submit")
      
            if(titleOrGenre === true) {
        
                const filterMovies = [...moviesDefault]
                .filter((item: any) => item.title === value)
                .sort((prev: any, next: any) => prev.vote_average - next.vote_average).reverse()
                console.log(filterMovies)
                
                console.log(value) // ok
                setSearchBlockState({
                    value: "",
                    movies: filterMovies,
                    renderResult: true
                    
                })
            
                props.history.push({
                    pathname: "/",
                    search: `?titleOrGenre=${titleOrGenre}=title${true}seacth=${value}`
                })
      
            }else if(titleOrGenre === false) {
            //сделала костыльно, пределать !!
                const resfilterMoviesByGenre: any = []
      
                const filterMoviesByGenre = [...moviesDefault].forEach((item: any, index: number) => { 
                let val =  item.genres.some((genre: any, index: number, arr: []) => {
                        if(genre === value) {
                            resfilterMoviesByGenre.push(item)
                            return  item
                        }
                    })   
                if(val === false) {return}
      
            return item
                  
            })
            console.log(resfilterMoviesByGenre)
      
            resfilterMoviesByGenre.sort((prev: any, next: any) => prev.vote_average - next.vote_average).reverse()
            console.log(value) // ok

            setSearchBlockState({
                value: "",
                movies: resfilterMoviesByGenre,
                renderResult: true
            })

            props.history.push({
                pathname: "/",
                search: `?titleOrGenre=${titleOrGenre}&ganre${true}name=${value}`
            })
        }   
      }
console.log(movies)
        return (
            <div className="search__block">
                <form >
                    <h1>Find your movie</h1>
                    <div className="search__block__input-wrapper">
                        <div className="form__group field">
                        <input 
                        onChange={handeleChange}
                        type="text" 
                        className="form__field" 
                        placeholder="Name" 
                        name="name" id='name'
                        value={value} 
                        // onKeyPress={handleSubmit} 
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
                                `button__default button__default-sm ${сolorActive ? 
                                'button__default-active' : ""}`} 
                                type="button" 
                                onClick={handleClickToggle}>
                                title
                            </ButtonDefault>
                            <ButtonDefault 
                                className={
                                    `button__default button__default-sm ${сolorActive ? 
                                    "" : 'button__default-active'}`}
                                type="button" 
                                onClick={handleClickToggle}>
                                genre
                            </ButtonDefault>
                        </div>
                        <ButtonDefault 
                            className="button__default button__default-search" 
                            type="submit" 
                            onClick={handleSubmit}
                        >search
                        </ButtonDefault>
                    </div>
                </form>
                <div>
                {/* <SortDetails
                    movies={movies}
                    // handleChangSortParam={handleChangSortParam}
                    // handleChangSortValue={handleChangSortValue}
                    colorActiveSort={colorActiveSort}
                 /> */}
                </div>
            </div>
        )
    }


export default withRouter(SearchBlock)