import React from "react";
import Button from "../Button";
import Input from "../Input";
import Logo from "../Logo";
import "./index.scss";

interface IHeaderProps {
  onClickSearch(): void;
  searchTerm: string;
  onChange(term: string): void;
  onClickFilterBy(filterBy: string): void;
  filterBy: string;
  onKeyPress(e: React.SyntheticEvent): void;
}

const Header = ({
  onClickSearch,
  searchTerm,
  onChange,
  onClickFilterBy,
  filterBy,
  onKeyPress,
}: IHeaderProps) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Logo />
        <h1>FIND YOUR MOVIE</h1>
        <Input value={searchTerm} onChange={onChange} onKeyPress={onKeyPress} />
        <div className="header__searchPannel">
          <div className="header__searchBy">
            <span className="header__text">SEARCH BY</span>
            <Button
              onClick={() => onClickFilterBy("title")}
              className={filterBy === "title" ? "active" : "btn-title"}
              buttonName="TITLE"
            />
            <Button
              onClick={() => onClickFilterBy("genre")}
              className={filterBy === "genre" ? "active" : "btn-genre"}
              buttonName="GENRE"
            />
          </div>
          <div>
            <Button
              buttonName="SEARCH"
              className="searchButton"
              onClick={onClickSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
