import React from 'react';
import './sort-panel.css';

interface IFilm {
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    genres: string[],
    runtime: number
  }
  
  interface ISortPanelProps {
    movies:IFilm[],
    handleSortChange(sortBy:string): void
  }

  interface ISortPanelState {
    sortBy: 'date' | 'rating',
    activesort : string
  }

 class SortPanel extends React.Component<ISortPanelProps,ISortPanelState> {

  state: ISortPanelState = {
    sortBy: 'date',
    activesort: 'datesort'
  }

  sortByDate = () => {
    this.setState({sortBy: 'date',activesort: 'datesort'})
  }

  sortByRating = () => {
    this.setState({sortBy: 'rating',activesort: 'ratingsort'});
  }


render(){
  const {movies} = this.props;
  return (
    <div className="sort_panel">
        <p className="movies_found"><span>{movies.length}</span> movies found</p> 
        <div className="sort">
            <span className="sort_by">Sort by</span>
            <button name="datesort" className={this.state.activesort === 'datesort' ? 'sort_date_active' : 'sort_date'} onClick={this.sortByDate}>release date</button>
            <button name="ratingsort"className={this.state.activesort === 'ratingsort' ? 'sort_rating_active' : 'sort_rating'} onClick={this.sortByRating}>rating</button>
        </div>
    </div>
  )
}

    
}

export default SortPanel;
