import React from 'react'
import Button from '../../Shared/Buttons/Button'
import { parse } from 'query-string'
import * as H from 'history'

// remove config DONE!!!!!!!!!!

interface ISearchProps{
  handleSearchChange({ search, searchBy }: {search: string, searchBy:string}): void,
  location: H.Location
};

export default class Search extends React.Component<ISearchProps> {

  state = {
    searchInput: '',
    searchBy: 'Title',
  };

  componentDidMount() {
    const URLData = parse(this.props.location.search) as {
      searchBy: string;
      search: string
    };
    let { searchBy, search } = URLData;
    searchBy ? this.setState({ searchBy: searchBy.replace(/\s+/g, ''), searchInput: search }) : searchBy = 'Title';
  };

  setSearchState = (value: string) => {
    this.setState({ searchBy: value});
  };

  setSearchInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState( { searchInput: e.target.value } );
  };

  searchHandler = () => {
    return this.props.handleSearchChange({
      search: this.state.searchInput,
      searchBy: this.state.searchBy,
    }),
    this.setState({ searchInput: '' });
  };

  keyPressHandler = (e:React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      this.searchHandler();
      return (
        this.setSearchInputState, 
        this.setSearchState
      );
    };
  };
  render() {
    return(
      // wrap in form or add keypreess handler DONE!!!!!!!!!!!!!!!!!!
      <div className="search">
        <h2>FIND YOUR MOVIE</h2>
        <input
          onKeyDown = { this.keyPressHandler }
          value = { this.state.searchInput }
          onChange = { this.setSearchInputState }
        />
        <div className="search__menu">
          <div className="search__menu__params">
            <p>SEARCH BY</p>
            <Button 
              isActive = { this.state.searchBy === 'Title' }
              buttonHandler = { () => this.setSearchState('Title') }
              buttonContent = { 'Title' }
            />
            <Button
              isActive = { this.state.searchBy === 'Genre' }
              buttonHandler = { () => this.setSearchState('Genre') }
              buttonContent = { 'Genre' }
            />
          </div>
          <Button
            isActive = { true }
            buttonHandler = { this.searchHandler }
            buttonContent = { "Search" }
          />  
        </div>
      </div>
    )
  }
}
