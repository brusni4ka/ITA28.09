import React from 'react'
import Button from '../../Shared/Buttons/Button'
import { parse } from 'query-string'
import * as H from 'history'

interface ISortProps {
  handleSearchChange( { sortBy}: { sortBy: string } ): void,
  numberOfFilms: number,
  location: H.Location
};

interface ISortState {
  sortBy: string
};

export default class Sort extends React.Component<ISortProps, ISortState>{
  state: ISortState = {
    sortBy: 'release_date'
  };

  componentDidMount() {
    const URLData = parse(this.props.location.search) as {
      sortBy: string;
    };
    let { sortBy } = URLData;
    sortBy && this.setState({ sortBy });
  };

  setSortState (value: string) {
    this.setState({ sortBy: value }, () => {
        return this.props.handleSearchChange({
          sortBy: value,
        });
      }
    );
  };

  render() {
    return(
      <div className="sort__wrapp">
        <div className="sort__wrapp__content">
          <p>{ this.props.numberOfFilms } movies found</p>
          <div className="sort__wrapp__content__params">
            <p>Sort by</p>
            <Button 
              isActive = { this.state.sortBy === 'release_date' }
              buttonHandler = { () => this.setSortState('release_date') }
              buttonContent = { 'release date' }
            />
            <Button
              isActive = { this.state.sortBy === 'vote_average' }
              buttonHandler = { () => this.setSortState('vote_average') }
              buttonContent = { 'raiting' }
            />
          </div>
        </div>
      </div>
    );
  };
};