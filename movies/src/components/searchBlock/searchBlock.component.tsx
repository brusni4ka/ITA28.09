import React  from "react"
import "./searchBlock.styles.scss"

import ButtonDefault from "../buttonDefault/buttonDefault.component"

const copyGanres =  [
{id: 12222, name: "Ganres"},
{id: 28, name: "Action"},
{id: 12, name: "Adventure"},
{id: 16, name: "Animation"},
{id: 35, name: "Comedy"},
{id: 80, name: "Crime"},
{id: 99, name: "Documentary"},
{id: 18, name: "Drama"},
{id: 10751, name: "Family"},
{id: 14, name: "Fantasy"},
{id: 36, name: "History"},
{id: 27, name: "Horror"},
{id: 10402, name: "Music"},
{id: 9648, name: "Mystery"},
{id: 10749, name: "Romance"},
{id: 878, name: "Science Fiction"},
{id: 10770, name: "TV Movie"},
{id: 53, name: "Thriller"},
{id: 10752, name: "War"},
{id: 37, name: "Western"},

    ]

    interface ISearchBlock {
        handleSubmit: any,
        handeleChange: any,
        handleClickToggle: any,
        value: string,
        сolorActive?: boolean,
   
        
    }

    class SearchBlock extends React.Component<ISearchBlock, {}>{
    

    handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        console.log("works")
    }


    render () {
        const {handleSubmit, handeleChange, value, handleClickToggle, сolorActive} = this.props 
        return (
            <div className="search__block">
                <form action="">
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
                        required 
                        />
                        <label  className="form__label">Search movies</label>
                        </div>
                    </div>
                    <div className="search__block-btn-wrapper">
                        <div className="search__block-btn">
                            <h3>Search by</h3>
                            <ButtonDefault 
                                className={`button__default button__default-sm ${сolorActive ? 'button__default-active' : ""}`} 
                                // style=backgroundColor={this.state.flag === true ? 'red': 'blue'} 
                                type="button" 
                                onClick={handleClickToggle}>
                                title
                            </ButtonDefault>
                            <ButtonDefault 
                                 className={`button__default button__default-sm ${сolorActive ? "" : 'button__default-active'}`}
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
            </div>
        )
    }
}

export default SearchBlock