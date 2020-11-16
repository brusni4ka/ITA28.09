import React from 'react';
import './SearchPanel.css';
import Button from '../../shared/button';


interface ISearchPanelState {
    value: string;
    searchBy: "title" | "genre"
}
interface IhandleSearchChangeProps {
    handleSearchChange({search, searchBy}: {search: string, searchBy: string}): void
}

class SearchPanel extends React.Component<IhandleSearchChangeProps, ISearchPanelState> {

    state: ISearchPanelState = {
        value: '',
        searchBy: "title",
    }
    searchbytitle = () => {
        this.setState({
            searchBy: "title"
        })
    }
    searchbygenre = () => {
        this.setState({
            searchBy: "genre"
        })
    }
    handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = () => this.props.handleSearchChange({
        search: this.state.value,
        searchBy: this.state.searchBy
    })

    render() {
        return (
            <div className="search-panel">
                <h1 className="search-title">Find your film</h1>
                <div className="search">
                    {/* <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder=" type to search" onChange={this.handleChangeInput} />
                    <button type="submit" >Search</button>
                    </form> */}
                    <input type="text" placeholder=" type to search" onChange={this.handleChangeInput} />
                </div>
                <div className="btn-row">
                    <div className="search-filter">
                        <p>Search by</p>
                        <Button content={"title"} handler={this.searchbytitle} />
                        <Button content={"genre"} handler={this.searchbygenre} />
                    </div>
                  <Button content={"search"} handler={this.handleSubmit} />
                </div>
            </div>

        )
    }
}


export default SearchPanel