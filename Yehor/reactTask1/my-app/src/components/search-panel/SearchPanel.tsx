import React from 'react';
import './SearchPanel.css';
import Button from '../../shared/button';


interface ISearchPanel {
    titleBtn: string,
    genreBtn: string,
    searchBtn: string
}

class SearchPanel extends React.Component<{}, ISearchPanel> {

    state: ISearchPanel = {
        titleBtn: 'title',
        genreBtn: 'genre',
        searchBtn: 'search'
    }
    render() {
        const {titleBtn, genreBtn, searchBtn} = this.state
        return (
            <div className="search-panel">
                <h1>Find your film</h1>
                <div className="search">
                    <input type="text" />
                </div>
                <div className="btn-row">
                    <div className="search-filter">
                        <p>Search by</p>
                        <Button content={titleBtn}/>
                        <Button content={genreBtn}/>
                    </div>
                    <Button content={searchBtn}/>
                </div>
            </div>

        )
    }
}


export default SearchPanel