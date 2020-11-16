import React from 'react';
import Header from '../header';
import { RouteComponentProps } from 'react-router-dom';
import Movie from '../movie';
import SortPanel from '../sort-panel/sort-panel';
import Footer from '../../Shared/footer';
import SearchPanel from '../SearchPanel';
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

interface IMoviePageState {
  search: string,
  searchBy: string,
  sortBy : string
}
interface IMoviePageProps {
  movies:IFilm[],
}


type MovieDetailsMainProps = IMoviePageProps & RouteComponentProps;

class MoviePageMain extends React.Component<MovieDetailsMainProps,IMoviePageState>{

  state :IMoviePageState= {
    search: '',
    searchBy : '',
    sortBy: ''
  }


  
  handleSearchChange = ({search, searchBy} :{search:string,searchBy:string}) =>{
    this.setState({
      search : search,
      searchBy: searchBy
    })

    setTimeout(()=>
    this.props.history.push({
      pathname: "/",
      search: "?searchby=" +this.state.searchBy + "&search=" + this.state.search
    }),1000)
  }

  handleSortChange = (sortBy:string) => {
    this.setState({sortBy : sortBy})
  }

 

   render(){
    const {movies} = this.props;
     return(
       <div className = "movieapp">
           <div className="heading">
              <Header/>
              <SearchPanel handleSearchChange = {this.handleSearchChange}/>
           </div>
            <SortPanel movies = {movies} handleSortChange = {this.handleSortChange}/>
           <div className="movies">
            <Movie  movies = {movies}  />
           </div>
           <div className="footer">
            <Footer/>
           </div>
      </div>

     );
   };
  
};

export default MoviePageMain;

