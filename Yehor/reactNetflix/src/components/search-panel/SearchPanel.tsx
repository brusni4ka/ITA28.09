import React, { useEffect, useState } from "react";
import "./SearchPanel.css";
import Button from "../button";
import { parse } from "query-string";
import * as History from "history";

interface IhandleSearchChangeProps {
  handleSearchChange({
    search,
    searchBy,
  }: {
    search: string;
    searchBy: string;
  }): void;
  location: History.Location;
}
enum SearchBy {
  Title = "title",
  Genre = "genres",
}

const SearchPanel = (props: IhandleSearchChangeProps) => {
  const [value, setValue] = useState("");
  const [searchBy, setSearchBy] = useState(SearchBy.Title);

  useEffect(() => {
    const querySrch = parse(props.location.search) as {
      searchBy: string;
      search: string;
    };
    const { searchBy, search } = querySrch;
    checkSetSearchSearchBy(searchBy, search);
  }, []);

  useEffect(() => {
    const querySrch = parse(props.location.search) as {
      searchBy: string;
      search: string;
    };
    const { searchBy, search } = querySrch;
    checkSetSearchSearchBy(searchBy, search);
  }, [props.location]);

  const checkSetSearchSearchBy = (
    searchByValue: string,
    searchValue: string
  ) => {
    setSearchBy(
      searchByValue === SearchBy.Genre ? SearchBy.Genre : SearchBy.Title
    );
    setValue(searchValue || "");
  };

  const searchByTitle = () => {
    if (searchBy === SearchBy.Genre) {
      setValue("");
      setSearchBy(SearchBy.Title);
    }
  };
  const searchByGenre = () => {
    if (searchBy === SearchBy.Title) {
      setValue("");
      setSearchBy(SearchBy.Genre);
    }
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.handleSearchChange({
      search: value,
      searchBy: searchBy,
    });
  };
  return (
    <div className="search-panel">
      <h1 className="search-title">Find your film</h1>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            placeholder=" type to search"
            onChange={handleChangeInput}
          />
          <Button content={"Search"} styleClass={"on"} />
        </form>
      </div>
      <div className="btn-row">
        <div className="search-filter">
          <p>Search by</p>
          <Button
            content={"title"}
            styleClass={searchBy === SearchBy.Title ? "on" : "off"}
            handler={searchByTitle}
          />
          <Button
            content={"genre"}
            styleClass={searchBy === SearchBy.Genre ? "on" : "off"}
            handler={searchByGenre}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
