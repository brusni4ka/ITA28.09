import IMovie from "./IMovie"

interface IRootState {
    movies: {
      status: string,
      movies: IMovie[],
      offset: number
    },
    movie: {
      status: string,
      movie: IMovie,
      id: string
    }
  }
export default IRootState;