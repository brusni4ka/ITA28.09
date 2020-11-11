import React from 'react';
import Header from '../../Shared/header';
import Movie from '../../Shared/movie';
import SortPanel from '../sort-panel/sort-panel';
import Footer from '../../Shared/footer';
import SInput from '../input/input';
import SearchFilterBtns from '../serach-filter-btns/search-filter-btns';
import Searchbtn from '../../Shared/search-button/search-buton';
import '../../index.css';

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

interface IAppS {
  movies:IFilm[];
}

class App extends React.Component<{},IAppS>{

  state :IAppS= {
    movies: []
  }

  componentDidMount() {
    fetch('https://reactjs-cdp.herokuapp.com/movies')
      .then(response => response.json())
      .then(receivedData => {
        this.setState({movies: receivedData.data });
      })
  }
    

  
  
   render(){
    const {movies} = this.state;
     return(
       <div className = "movieapp">
           <div className="heading">
              <Header/>
              <SInput/>
                <div className="filter">
                  <div className="filter_btns">
                    <SearchFilterBtns/>
                  </div>
                    <Searchbtn/>
                </div>
           </div>
            <SortPanel movies = {movies}/>
           <div className="movies">
            <Movie movies = {movies}  />
           </div>
           <div className="footer">
            <Footer/>
           </div>
      </div>

     );
   };
  
};

export default App;

