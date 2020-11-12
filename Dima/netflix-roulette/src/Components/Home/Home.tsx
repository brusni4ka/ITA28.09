import React from 'react'
import Films from '../Films/Films'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Sort from '../Sort/Sort'
import Footer from '../Footer/Footer'

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
  genres: Array<string>,
  runtime: number
}

interface IHomeState {
  films: IFilm[],
  number_of_films: number
}


export default class Home extends React.Component<{}, IHomeState> {

  state: IHomeState = {
    films: [],
    number_of_films: 0
  }

  getFilms = async (): Promise<void> => {
    try {
      const data: any = await (await fetch('https://reactjs-cdp.herokuapp.com/movies')).json()
      this.setState({films: data.data, number_of_films: data.data.length})
    }
    catch(err) {
      console.error(err)
    }
  }

  componentDidMount() {
    this.getFilms()
  }
  render() {
    const { films } = this.state
    const { number_of_films } = this.state
    console.log(films)
    console.log(number_of_films)
    return (
      <div className="main-wrapp">
        <div className="top">
          <div className="top__wrapp">
            <Header />
            <Search />
          </div>
        </div>
        <Sort 
          number_of_films={number_of_films}
        />
        <Films 
          films={ films }
        />
        <Footer />
      </div>
    )
  }
}
