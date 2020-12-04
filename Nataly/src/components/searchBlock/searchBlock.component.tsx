import React, {useState, useEffect, useReducer}  from "react"
import "./searchBlock.styles.scss"

import {useSelector, useDispatch} from "react-redux"

import { parse, stringify } from "query-string";

import {withRouter, RouteComponentProps} from "react-router-dom"

import ButtonDefault from "../buttonDefault/buttonDefault.component"
import SortDetails from "../sort-details/sort-details.component"
import { moviesFetchStartAction} from "../../redux/movies/movies.actions"


    interface  ISearchBlockState {
        titleOrGenre?: boolean,
        value?: string,
        сolorActive?: boolean, 
        colorActiveSort?: boolean,
        isLoading?: boolean,
        renderResult?: boolean,

    }

    interface ISeachParam {
        searchTerm: string,
        filterBy: string,
    }

    interface RootState {
        movies: any
    }
    

    const  SearchBlock: React.FC<RouteComponentProps> = (props) => {

       const location = props.location
       const history = props.history

       const disputch = useDispatch()
       const movies = useSelector<RootState>((state) => state.movies.movies) 

       const [searchParam, setSeachParm] = useState<ISeachParam>({
        searchTerm: "",
        filterBy: "title",
       })

       const {searchTerm, filterBy} = searchParam

       console.log(movies)

        const [value, setValue] = useState("")

        const [searchBlockstate, setSearchBlockState] = useState<ISearchBlockState>({
            сolorActive: true,
            isLoading: false,
            colorActiveSort: true,
            renderResult: false
        })

        const {
            сolorActive,
            isLoading,
            colorActiveSort,
            renderResult
        } = searchBlockstate


        const  handleChangSortParam = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ): void => {
            console.log("new value")
            setSearchBlockState({
                colorActiveSort: !searchBlockstate.colorActiveSort
            })
        }
        
        const handleClickToggle = (e: React.MouseEvent) => {
            e.preventDefault()
            console.log("works red color active")
            setSearchBlockState({
                сolorActive: !searchBlockstate.сolorActive
            }) 
        }    
        
        const handeleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("value from input")
            setValue(e.target.value)
            console.log(value)
        }

        const searchHandler = (searchTerm: string, filterBy: string): void => {
            const queryUrl = parse(props.location.search) as {
              searchTerm: string;
              filterBy: string;
              sortBy: string;
            };
            const { sortBy } = queryUrl;
            const query = stringify({ ...queryUrl, searchTerm, filterBy });
            const sortByType = sortBy ? sortBy : "release_date";

            disputch(moviesFetchStartAction(sortByType, filterBy, searchTerm))

            props.history.push({
              pathname: "/",
              search: query,
            });
          };

        const handleSubmit = (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLInputElement>)  => {
            e.preventDefault()

            console.log("submit")
            const queryUrl = parse(props.location.search) as {
                searchTerm: string;
                filterBy: string;
                sortBy: string;
              };
              const { sortBy } = queryUrl;
              const query = stringify({ ...queryUrl, searchTerm, filterBy });
              const sortByType = sortBy ? sortBy : "release_date";
  
              disputch(moviesFetchStartAction(sortByType, filterBy, searchTerm))
  
              props.history.push({
                pathname: "/",
                search: query,
              });  
      }

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
                        // onKeyPress={handleSubmit}  // if it added  onChange don't works
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
                <SortDetails
                    movies={movies}
                    handleChangSortParam={handleChangSortParam}
                    colorActiveSort={colorActiveSort}
                 />
                </div>
            </div>
        )
    }


export default withRouter(SearchBlock)