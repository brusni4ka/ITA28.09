import React from "react";
import "./SearchPanel.css";
import { parse } from "query-string";
import * as H from "history";

interface ISearchPanelProps {
  handleSearchChange({
    search,
    searchBy,
  }: {
    search: string;
    searchBy: string;
  }): void;
  location: H.Location;
  history: H.History;
}

interface ISearchPanelState {
  value: string;
  searchBy: IsearchBy;
}
enum IsearchBy {
  title = "title",
  genre = "genre",
}

class SearchPanel extends React.Component<
  ISearchPanelProps,
  ISearchPanelState
> {
  state: ISearchPanelState = {
    value: "",
    searchBy: IsearchBy.title,
  };

  componentDidMount() {
    const query = parse(this.props.location.search) as {
      searchBy: string;
      search: string;
    };
    let { searchBy, search } = query;
    if(searchBy){
      this.setState({
        searchBy: searchBy === IsearchBy.title ? 
           IsearchBy.title : IsearchBy.genre,
        value: search
      });
    }
  }
  componentDidUpdate(prevProps:ISearchPanelProps){
    if(this.props.location !== prevProps.location && this.props.history.action !== "PUSH"){
      const query = parse(this.props.location.search) as {
        searchBy: string;
        search: string;
      };
      let { searchBy, search } = query;
      if(searchBy){
        this.setState({
          searchBy: searchBy === IsearchBy.title ? 
             IsearchBy.title : IsearchBy.genre,
          value: search
        });
      }
    }
  }

  handleSearchParams = (value: IsearchBy) => {
    this.setState({ searchBy: value ,value: ''});
  };

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = () => {
    this.props.handleSearchChange({
      search: this.state.value,
      searchBy: this.state.searchBy,
    });
  };

  keyPressOn = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  render() {
    return (
      <>
        <p className="findmovie">FIND YOUR MOVIE</p>
        <input
          onKeyDown={this.keyPressOn}
          value={this.state.value}
          type="text"
          className="search-input"
          placeholder="type to search"
          onChange={this.handleChangeInput}
        ></input>
        <div className="filter">
          <div className="filter_btns">
            <p className="search">SEARCH BY</p>
            <button
              onClick={() => this.handleSearchParams(IsearchBy.title)}
              name="btntitle"
              className={
                this.state.searchBy === IsearchBy.title
                  ? "title_btn_active"
                  : "title_btn"
              }
            >
              TITLE
            </button>
            <button
              onClick={() => this.handleSearchParams(IsearchBy.genre)}
              name="btngenre"
              className={
                this.state.searchBy === IsearchBy.genre
                  ? "genre_btn_active"
                  : "genre_btn"
              }
            >
              GENRE
            </button>
          </div>
          <button className="search_btn" onClick={this.handleSubmit}>
            SEARCH
          </button>
        </div>
      </>
    );
  }
}

export default SearchPanel;