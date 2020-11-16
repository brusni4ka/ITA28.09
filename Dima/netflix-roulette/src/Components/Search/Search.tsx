import React from 'react'
import Button from '../../Shared/Buttons/Button'

const buttons = [
  {
    title: 'Title',
    buttonValue: 'title'
  },
  {
    title: 'Genre',
    buttonValue: 'genre'
  },
]

interface ISearchProps{
  handleSearchChange({ search, searchBy }: {search: string, searchBy:string}): void
}
export default class Search extends React.Component<ISearchProps> {

  state = {
    searchInput: '',
    searchBy: 'Title'
  }

  setSearchState(value: string) {
    this.setState({ searchBy: value})
  }

  setSearchInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput: e.target.value })
  }

  searchHandler = () => this.props.handleSearchChange({
    search: this.state.searchInput,
    searchBy: this.state.searchBy
  })

  render() {
    return(
      <div className="search">
        <h2>FIND YOUR MOVIE</h2>
        <input onChange={ this.setSearchInputState }/>
        <div className="search__menu">
          <div className="search__menu__params">
            <p>SEARCH BY</p>
            { buttons.map( button => <Button 
              active={ this.state.searchBy } 
              buttonContent={ button.title } 
              key={ button.title } 
              buttonHandler={ () => this.setSearchState(button.title) }/> 
            ) }
          </div>
          <Button
            buttonHandler={this.searchHandler}
            buttonContent={ "Search" }
          />
        </div>
      </div>
    )
  }
}
