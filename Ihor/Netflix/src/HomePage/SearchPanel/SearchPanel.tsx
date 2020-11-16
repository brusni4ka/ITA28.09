import React from 'react';
import './SearchPanel.css';

interface ISearchPanelProps{
    handleSearchChange({search, searchBy} :{search:string,searchBy:string}):void
}

interface ISearchPanelState {
    value : string,
    searchBy:  'title' | 'genre',
    activebtn: string
}

class SearchPanel extends React.Component<ISearchPanelProps,ISearchPanelState> {

    state: ISearchPanelState = {
        value : '',
        searchBy: 'title',
        activebtn: 'btntitle'
    }

    searchByTitle = () => {
        this.setState({searchBy: 'title',activebtn: 'btntitle'});
    }

    searchByGenre = () => {
        this.setState({searchBy: 'genre',activebtn: 'btngenre'});
    }

    handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        this.setState({
            value : e.target.value
        })
    }

    handleSubmit = () => this.props.handleSearchChange({
        search: this.state.value,
        searchBy: this.state.searchBy
    })
        

    render(){
        return(
            <>
                <p className="findmovie">FIND YOUR MOVIE</p>
                <input type = "text" className="search-input" placeholder="type to search" onChange={this.handleChangeInput.bind(this)} ></input>
                <div className="filter">
                    <div className="filter_btns">
                        <p className="search">SEARCH BY</p>
                        <button name ='btntitle' className={this.state.activebtn === 'btntitle' ? 'title_btn_active' : 'title_btn'} onClick={this.searchByTitle}>TITLE</button>
                        <button name ='btngenre' className={this.state.activebtn === 'btngenre' ? 'genre_btn_active' : 'genre_btn'} onClick={this.searchByGenre}>GENRE</button>
                    </div>
                    <button className="search_btn" onClick = {this.handleSubmit}>SEARCH</button>
                </div>  
               
            </>
        )
    }
}

export default SearchPanel;