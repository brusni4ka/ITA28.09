import React, { Component } from "react";
import Input from "../Input";
import Button from "../Button";
import "./SearchForm.scss";

interface ISearchFormProps {
  onSearchClick(searchTerm: string, filterBy: string): void;
  sortBy: string;
}

interface ISearchFormState {
  searchTerm: string;
  filterBy: string;
}
class SearchForm extends Component<ISearchFormProps, ISearchFormState> {
  state = {
    searchTerm: "",
    filterBy: "title",
  };

  onChangeHadler = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  onKeyPressHandler = (e: any) => {
    if (e.keyCode === 13 || e.charCode === 13) {
      this.props.onSearchClick(this.state.searchTerm, this.state.filterBy);
      this.state.searchTerm = "";
    }
  };

  onSearchClickHandler = () => {
    this.props.onSearchClick(this.state.searchTerm, this.state.filterBy);
    this.setState({ searchTerm: "" });
  };

  render() {
    return (
      <div className="searchForm">
        <h1>FIND YOUR MOVIE</h1>
        <Input
          value={this.state.searchTerm}
          onChange={this.onChangeHadler}
          onKeyPress={this.onKeyPressHandler}
        />
        <div className="searchForm__pannel">
          <div className="searchForm__searchBy">
            <span className="searchForm__text">SEARCH BY</span>
            <Button
              onClick={() =>
                this.setState({ filterBy: "title", searchTerm: "" })
              }
              className={
                this.state.filterBy === "title" ? "active" : "btn-title"
              }
              buttonName="TITLE"
            />
            <Button
              onClick={() =>
                this.setState({ filterBy: "genre", searchTerm: "" })
              }
              className={
                this.state.filterBy === "genre" ? "active" : "btn-genre"
              }
              buttonName="GENRE"
            />
          </div>
          <div>
            <Button
              buttonName="SEARCH"
              className="searchButton"
              onClick={this.onSearchClickHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
