import { MoviesTypes, IMoviesAction } from "../actions/moviesActions";
import IMovie from "../../interfaces/IMovie";

interface IState {
  status: string;
  movies: IMovie[];
  offset: number
}

const moviestDefaultState: IState = {
  status: "",
  movies: [],
  offset: 0,
};

const reducerMovies = (state = moviestDefaultState, action: IMoviesAction) => {
  switch (action.type) {
    case MoviesTypes.LoadData: {
      return {
        ...state,
        status: action.status,
        offset: action.offset
      };
    }
    case MoviesTypes.ReceivedData: {
      return {
        ...state,
        status: action.status,
        movies: action.movies
      };
    }
    case MoviesTypes.Error: {
      return {
        ...state,
        status: action.status,
      };
    }
    case MoviesTypes.DataOffsetIncrement: {
      return {
        ...state,
        status: action.status,
        offset: state.movies.length < 9 ? state.offset: state.offset + 9
      };
    }
    case MoviesTypes.DataOffsetDecrement: {
      return {
        ...state,
        status: action.status,
        offset: state.offset < 9 ? state.offset: state.offset - 9
      };
    }
    
    default:
      return state;
  }
};

export default reducerMovies;
