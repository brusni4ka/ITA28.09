import React from 'react'
import Films from '../../Components/Films/Films'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import Sort from '../../Components/Sort/Sort'
import Footer from '../../Components/Footer/Footer'
import { RouteComponentProps } from 'react-router-dom'

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

interface IFilmsState {
  search: string,
  searchBy: string,
  sortBy : string
}

interface IFilmsProps {
  films: IFilm[],
  number_of_films: number
}

type FilmDetails = IFilmsProps & RouteComponentProps

export default class Home extends React.Component<FilmDetails, IFilmsState> {
  state: IFilmsState = {
    search: '',
    searchBy: '',
    sortBy: ''
  }

  handleSearchChange = ({ search, searchBy }: {search: string, searchBy:string}) => {
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
    const { films } = this.props
    const { number_of_films } = this.props
    return (
      <div className="main-wrapp">
        <div className="top">
          <div className="top__wrapp">
            <Header />
            <Search handleSearchChange={ this.handleSearchChange }/>
          </div>
        </div>
        <Sort 
          number_of_films={ number_of_films }
        />
        <Films 
          films={ films }
        />
        <Footer />
      </div>
    )
  }
}
