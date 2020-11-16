import React from 'react';
import Header from '../components/header';
import SearchPanel from '../components/search-panel'
import SortPanel from '../components/sort-panel';
import Main from '../components/main';
import Footer from '../components/footer';
import { RouteComponentProps } from 'react-router-dom';

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

interface IMoviesProps {
  movies: IMovie[];
}

interface IHomePageState {
  search: string,
  searchBy: string
}

type HomePageProps = IMoviesProps & RouteComponentProps

class HomePage extends React.Component<HomePageProps, IHomePageState> {
  state = {
    search: '',
    searchBy: ''
  }
  handleSearchChange = ({search, searchBy}: {search:string, searchBy: string}) => {
    this.setState({
      search: search,
      searchBy: searchBy
    })
    setTimeout(()=>
    this.props.history.push({
      pathname: "/",
      search: "?searchby=" +this.state.searchBy + "&search=" + this.state.search
    }),1000)
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="blur">
            <div className="top-container">
              <Header />
              <SearchPanel handleSearchChange={this.handleSearchChange}/>
            </div>
          </div>
        </div>
        <div className="sort-wrapper">
          <div className="top-container">
            <SortPanel movies={this.props.movies} />
          </div>
        </div>
        <div className="main-container">
          <Main movies={this.props.movies} />
        </div>
        <div className="wrapper-footer">
          <div className="main-container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;