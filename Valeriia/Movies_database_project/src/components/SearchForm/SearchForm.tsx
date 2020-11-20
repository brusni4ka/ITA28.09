import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { parse } from "query-string";
import Input from "../Input";
import Button from "../Button";
import "./SearchForm.scss";

interface ISearchFormProps extends RouteComponentProps {
  onSearchClick(searchTerm: string, filterBy: string): void;
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

  componentDidMount = () => {
    const query = parse(this.props.location.search) as {
      filterBy: string;
    };
    const { filterBy } = query;
    const filterByType = filterBy ? filterBy : "title";
    this.setState({
      filterBy: filterByType,
    });
  };

  componentDidUpdate = (prevProps: ISearchFormProps) => {
    if (this.props.location.search !== prevProps.location.search) {
      const query = parse(this.props.location.search) as {
        filterBy: string;
      };
      const { filterBy } = query;
      const filterByType = filterBy ? filterBy : "title";
      this.setState({
        filterBy: filterByType,
      });
    }
  };

  onChangeHadler = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      this.props.onSearchClick(this.state.searchTerm, this.state.filterBy);
      this.setState({ searchTerm: "" });
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

export default withRouter(SearchForm);
