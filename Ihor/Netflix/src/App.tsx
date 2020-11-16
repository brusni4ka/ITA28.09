import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MoviePageMain from '../src/HomePage/MoviePageMain';
import MovieDetailsMain from '../src/MovieDetails/MovieDetailsMain';

interface IMovie {
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
  
  interface IMovies {
    films:IMovie[],
  }

class App extends React.Component<any,IMovies> {

    state = {
        films: []
    }

    componentDidMount = () => {
        fetch('https://reactjs-cdp.herokuapp.com/movies')
          .then(response => response.json())
          .then(receivedData => {
            this.setState({films: receivedData.data });
          })

          
      }
    
    render(){
        const { films } = this.state;
        return(
           <div className="App">
            <Router>
                <Route exact path="/"  
                render = {(props)=> <MoviePageMain movies={films} {...props}/>}/>
                 <Route path="/movieinfo/:id" 
                render = {(props)=> <MovieDetailsMain  films={films} {...props}/>}/>
            </Router>
           </div>
        )
    }
}

export default App;