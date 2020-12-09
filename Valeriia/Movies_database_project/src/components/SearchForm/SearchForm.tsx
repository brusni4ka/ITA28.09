import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { parse } from "query-string";
import Input from "../Input";
import Button from "../Button";
import "./SearchForm.scss";

interface ISearchFormProps extends RouteComponentProps {
  onSearchClick(searchTerm: string, filterBy: string): void;
}

const SearchForm = (props: ISearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("title");

  useEffect(() => {
    if (props.history.action !== "PUSH") {
      const query = parse(props.location.search) as {
        filterBy: string;
        searchTerm: string;
      };
      const { filterBy, searchTerm } = query;
      setFilterBy(filterBy || "title");
      setSearchTerm(searchTerm || "");
    }
  }, [props.history.action, props.location.search]);

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onSearchClickHandler();
    }
  };

  const onSearchClickHandler = () => {
    props.onSearchClick(searchTerm, filterBy);
  };

  const onCLickHandlerByTitle = () => {
    setFilterBy("title");
    setSearchTerm("");
  };

  const onCLickHandlerByGenre = () => {
    setFilterBy("genre");
    setSearchTerm("");
  };

  return (
    <div className="searchForm">
      <h1>FIND YOUR MOVIE</h1>
      <Input
        value={searchTerm}
        onChange={setSearchTerm}
        onKeyPress={onKeyPressHandler}
      />
      <div className="searchForm__pannel">
        <div className="searchForm__searchBy">
          <span className="searchForm__text">SEARCH BY</span>
          <Button
            onClick={onCLickHandlerByTitle}
            className={filterBy === "title" ? "active" : "btn-title"}
            buttonName="TITLE"
          />
          <Button
            onClick={onCLickHandlerByGenre}
            className={filterBy === "genre" ? "active" : "btn-genre"}
            buttonName="GENRE"
          />
        </div>
        <div>
          <Button
            buttonName="SEARCH"
            className="searchButton"
            onClick={onSearchClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchForm);
