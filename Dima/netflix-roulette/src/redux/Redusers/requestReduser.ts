import { RequestActions } from './../Actions/requestActions';
import IFilm from '../../interfaces/IFilm'

export enum RequestActionsTypes {
  FILMS_REQUESTED = 'FILMS_REQUESTED',
  FILMS_RECIEVED = 'FILMS_RECIEVED',
  FILMS_FAILED = 'FILMS_FAILED',
  CURRENTFILM_REQUESTED = 'CURRENTFILM_REQUESTED',
  CURRENTFILM_RECIEVED = 'CURRENTFILM_RECIEVED',
  CURRENTFILM_FAILED = 'CURRENTFILM_FAILED',
  PAGINATION_RECIEVED = 'PAGINATION_RECIEVED',
  PAGINATION_FAILED = 'PAGINATION_FAILED'
}

interface IInitialState {
  loading: boolean,
  films: IFilm[] | [],
  currentFilm: IFilm | null,
  error: string,
  sortBy: string,
}

const initialState: IInitialState = {
  loading: false,
  films: [],
  currentFilm: null,
  error: '',
  sortBy: 'release_date',
}

const requestReduser = (state = initialState, action: RequestActions) => {
  switch(action.type) {
    case 'FILMS_REQUESTED': 
      return {
        ...state,
        loading: true,
        sortBy: action.payload.sortBy
      };
    case 'FILMS_RECIEVED':
      return {
        ...state,
        loading: false,
        films: action.payload
      };
    case 'FILMS_FAILED': 
      return {
        ...state,
        loading: false,
      };
    case 'CURRENTFILM_REQUESTED': 
      return {
        ...state,
        loading: true,
        id: action.payload
      }
    case 'CURRENTFILM_RECIEVED': 
      return {
        ...state,
        loading: false,
        currentFilm: action.payload,
      }
    case 'CURRENTFILM_FAILED': 
      return {
        ...state,
        loading: false,
      }
    case 'PAGINATION_RECIEVED':
      return {
        ...state,
        loading: false,
        films: [...state.films, ...action.payload],
      }
    case 'PAGINATION_FAILED': 
    return {
      ...state
    }
    default: return state;
  };
};

export default requestReduser