import React from 'react'
import Button from '../../Shared/Buttons/Button'
import { parse } from 'query-string'
import * as H from 'history'

interface ISortProps {
  handleSearchChange( { sortBy}: { sortBy: string } ): void,
  numberOfFilms: number,
  location: H.Location,
  history: H.History
};

interface ISortState {
  sortBy: string
};

enum ISortByParams {
  ReleaseDate = 'release_date',
  VoteAverage = 'vote_average'
}

export default class Sort extends React.Component<ISortProps, ISortState>{
  state: ISortState = {
    sortBy: ISortByParams.ReleaseDate
  };

  // componentDidMount() {
  //   console.log(this.state.sortBy)
  //   const URLData = parse(this.props.location.search) as {
  //     sortBy: string;
  //   };
  //   let { sortBy } = URLData;
  //   if(!sortBy) {
  //     this.setState({ sortBy: ISortByParams.ReleaseDate });
  //   }
  // };

  componentDidUpdate(prevProps: ISortProps ) {
    if(this.props.location !== prevProps.location && this.props.history.action !== 'PUSH') {
      const URLData = parse(this.props.location.search) as {
        sortBy: string;
      };
      let { sortBy } = URLData;
      if(sortBy === ISortByParams.ReleaseDate) {
        this.setState({ sortBy });
      } else if(sortBy === ISortByParams.VoteAverage) {
        this.setState({ sortBy });
      } else {
        this.setState({ sortBy: ISortByParams.ReleaseDate });
      }
    }
  }

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
              isActive = { this.state.sortBy === ISortByParams.ReleaseDate }
              buttonHandler = { () => this.setSortState(ISortByParams.ReleaseDate) }
              buttonContent = { 'release date' }
            />
            <Button
              isActive = { this.state.sortBy === ISortByParams.VoteAverage }
              buttonHandler = { () => this.setSortState(ISortByParams.VoteAverage) }
              buttonContent = { 'raiting' }
            />
          </div>
        </div>
      </div>
    );
  };
};