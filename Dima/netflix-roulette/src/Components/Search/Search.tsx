import React, { useState, useEffect} from 'react'
import Button from '../../Shared/Buttons/Button'
import { parse } from 'query-string'
import { useLocation } from 'react-router-dom'

interface ISearchProps{
  handleSearchChange({ search, searchBy }: {search: string, searchBy:string}): void,
};

enum ISearchParams {
  Title = 'title',
  Genre = 'genre'
}

export default function Search(props: ISearchProps) {

  const location = useLocation()

  const [searchInput, setSearchInput] = useState('')
  const [searchBy, setSearchBy] = useState(ISearchParams.Title)

  useEffect(() => {
    const URLData = parse(location.search) as {
      searchBy: string;
      search: string
    };
    let { searchBy, search } = URLData;
    if(searchBy) {
      setSearchBy(searchBy === ISearchParams.Title ? ISearchParams.Title : ISearchParams.Genre)
    } else {
      setSearchBy(ISearchParams.Title)
      search && setSearchInput(search)
    }
  }, [])

  useEffect(() => {
    const URLData = parse(location.search) as {
      searchBy: string;
      search: string
    };
    let { searchBy, search } = URLData;
    if(searchBy) {
      setSearchBy(searchBy === ISearchParams.Title ? ISearchParams.Title : ISearchParams.Genre)
    } else {
      setSearchBy(ISearchParams.Title)
      search && setSearchInput(search)
    }
  }, [location])

  const setSearchByState = (value: ISearchParams) => {
    setSearchBy(value)
    setSearchInput('')
  };

  const setSearchInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = () => {
    props.handleSearchChange({
      search: searchInput,
      searchBy: searchBy,
    })
  };

  const keyPressHandler = (e:React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      searchHandler();
    };
  };
  return(
    <div className="search">
      <h2>FIND YOUR MOVIE</h2>
      <input
        onKeyDown = { keyPressHandler }
        value = { searchInput }
        onChange = { setSearchInputState }
      />
      <div className="search__menu">
        <div className="search__menu__params">
          <p>SEARCH BY</p>
          <Button 
            isActive = { searchBy === ISearchParams.Title }
            buttonHandler = { () => setSearchByState(ISearchParams.Title) }
            buttonContent = { 'Title' }
          />
          <Button
            isActive = { searchBy === 'genre' }
            buttonHandler = { () => setSearchByState(ISearchParams.Genre) }
            buttonContent = { 'Genre' }
          />
          </div>
          <Button
            isActive
            buttonHandler = { searchHandler }
            buttonContent = { "Search" }
          />  
        </div>
      </div>
    )
}
