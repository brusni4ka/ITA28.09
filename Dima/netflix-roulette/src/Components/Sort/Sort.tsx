import React from 'react'
import Button from '../../Shared/Buttons/Button'

interface ISortProps {
  number_of_films: number,
}

const buttons = [
  {
    title: 'relise date',
    buttonValue: 'relise date'
  },
  {
    title: 'raiting',
    buttonValue: 'raiting'
  },
]

export default class Sort extends React.Component<ISortProps>{
  state = {
    sortBy: 'relise date'
  }

  setSortState(value: string) {
    this.setState({ sortBy: value})
  }

  render() {
    return(
      <div className="sort__wrapp">
        <div className="sort__wrapp__content">
          <p>{this.props.number_of_films} movies found</p>
          <div className="sort__wrapp__content__params">
            <p>Sort by</p>
            { buttons.map( button => <Button 
              active={ this.state.sortBy } 
              buttonContent={ button.title } 
              key={ button.title } 
              buttonHandler={ () => this.setSortState(button.title) }/> 
            ) }
          </div>
        </div>
      </div>
    )
  }
}