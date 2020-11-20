import React from 'react'
import Button from '../../Shared/Buttons/Button'
import { parse } from 'query-string'
import * as H from 'history'

interface ISortProps {
  handleSearchChange( sortBy: any ): void,
  numberOfFilms: number,
  location: H.Location
};

interface ISortState {
  sortBy: string
};

export default class Sort extends React.Component<ISortProps, ISortState>{
  state: ISortState = {
    sortBy: 'relise date'
  };

  componentDidMount() {
    const URLData = parse(this.props.location.search) as {
      sortBy: string;
    };
    let { sortBy } = URLData;
    console.log(sortBy);
    sortBy ? this.setState({ sortBy: sortBy }) : sortBy = 'relise date';
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
              isActive = { this.state.sortBy === 'relise date' }
              buttonHandler = { () => this.setSortState('relise date') }
              buttonContent = { 'relise date' }
            />
            <Button
              isActive = { this.state.sortBy === 'raiting' }
              buttonHandler = { () => this.setSortState('raiting') }
              buttonContent = { 'raiting' }
            />
          </div>
        </div>
      </div>
    );
  };
};