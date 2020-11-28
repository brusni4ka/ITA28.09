import React from 'react'
import Button from '../../Shared/Buttons/Button'
import { parse } from 'query-string'
import * as H from 'history'

interface ISearchProps{
  handleSearchChange({ search, searchBy }: {search: string, searchBy:string}): void,
  location: H.Location
};

enum IsearchParams {
  Title = 'title',
  Genre = 'genre'
}

export default class Search extends React.Component<ISearchProps> {

  state = {
    searchInput: '',
    searchBy: 'title',
  };

  componentDidMount() {
    const URLData = parse(this.props.location.search) as {
      searchBy: string;
      search: string
    };
    let { searchBy, search } = URLData;
    if(searchBy) {
      searchBy === IsearchParams.Title
        ? this.setState({ searchBy: IsearchParams.Title }) 
          : this.setState({ searchBy: IsearchParams.Genre })
    } else {
      this.setState({ searchBy: IsearchParams.Title })
      search && this.setState({ searchInput: search })
    };
  };

  setSearchByState = (value: string) => {
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
    };
  };
  render() {
    return(
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
              isActive = { this.state.searchBy === 'title' }
              buttonHandler = { () => this.setSearchByState('title') }
              buttonContent = { 'Title' }
            />
            <Button
              isActive = { this.state.searchBy === 'genre' }
              buttonHandler = { () => this.setSearchByState('genre') }
              buttonContent = { 'Genre' }
            />
          </div>
          <Button
            isActive
            buttonHandler = { this.searchHandler }
            buttonContent = { "Search" }
          />  
        </div>
      </div>
    )
  }
}
