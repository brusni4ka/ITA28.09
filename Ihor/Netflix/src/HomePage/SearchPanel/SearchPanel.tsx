
import React,{useState,useEffect} from "react";
import "./SearchPanel.css";
import { parse } from "query-string";
import {useLocation} from 'react-router-dom';


interface ISearchPanelProps {
  handleSearchChange({
    search,
    searchBy,
  }: {
    search: string;
    searchBy: string;
  }): void;
}


enum IsearchBy {
  title = "title",
  genre = "genre",
}

const SearchPanel =(props:ISearchPanelProps) => {

  const [value,setValue] = useState('');
  const [searchBy, setSearchBy] = useState(IsearchBy.title);
  const location = useLocation();


  useEffect(()=>{
      const query = parse(location.search) as {
        searchBy: string;
        search: string;
      };
      let { searchBy, search } = query;
      setSearchBy(searchBy === IsearchBy.genre ? IsearchBy.genre : IsearchBy.title);
      setValue(search);
  },[location.search])


  const handleSearchParams = (value: IsearchBy) => {
    setSearchBy( value );
    setValue('');
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    props.handleSearchChange({
      search: value,
      searchBy: searchBy,
    });
  };

  const keyPressOn = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
      <>
        <p className="findmovie">FIND YOUR MOVIE</p>
        <input
          onKeyDown={keyPressOn}
          value={value}
          type="text"
          className="search-input"
          placeholder="type to search"
          onChange={handleChangeInput}

        ></input>
        <div className="filter">
          <div className="filter_btns">
            <p className="search">SEARCH BY</p>
            <button

              onClick={() => handleSearchParams(IsearchBy.title)}
              name="btntitle"
              className={
                searchBy === IsearchBy.title

                  ? "title_btn_active"
                  : "title_btn"
              }
            >
              TITLE
            </button>
            <button

              onClick={() => handleSearchParams(IsearchBy.genre)}
              name="btngenre"
              className={
                searchBy === IsearchBy.genre

                  ? "genre_btn_active"
                  : "genre_btn"
              }
            >
              GENRE
            </button>
          </div>

          <button className="search_btn" onClick={handleSubmit}>

            SEARCH
          </button>
        </div>
      </>

  );
}


export default SearchPanel;

