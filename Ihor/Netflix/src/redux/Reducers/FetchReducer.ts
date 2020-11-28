import IMovie from "../../Interfaces/IMovie";
import { FetchActions } from "../Actions/FetchActions";

export enum FetchActionsTypes {
  MOVIES_REQUESTED = "MOVIES_REQUESTED",
  MOVIES_RECIEVED = "MOVIES_RECIEVED",
  MOVIES_FAILED = "MOVIES_FAILED",
  SELECTED_MOVIE_REQUESTED = "SELECTED_MOVIE_REQUESTED",
  SELECTED_MOVIE_RECIEVED = "SELECTED_MOVIE_RECIEVED",
  SELECTED_MOVIE_FAILED = "SELECTED_MOVIE_FAILED",
}

interface IinitialState {
  loading: boolean;
  movies: IMovie[];
  movie: IMovie | null;
  error: string;
  id: string;
  sortBy: string;
}
const initialState: IinitialState = {
  loading: false,
  movies: [],
  movie: null,
  error: "",
  id: "",
  sortBy: "release_date",
};

const fetchReducer = (
  state: IinitialState = initialState,
  action: FetchActions
) => {
  switch (action.type) {
    case "MOVIES_REQUESTED":
      return {
        ...state,
        loading: true,
        sortBy: action.sortBy,
      };
    case "MOVIES_RECIEVED":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "MOVIES_FAILED":
      return {
        ...state,
        loading: false,
        error: "error",
      };
    case "SELECTED_MOVIE_REQUESTED":
      return {
        ...state,
        loading: true,
        id: action.payload,
      };
    case "SELECTED_MOVIE_RECIEVED":
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case "SELECTED_MOVIE_FAILED":
      return {
        ...state,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};

export default fetchReducer;
