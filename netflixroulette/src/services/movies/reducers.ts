import { IMoviesStore } from '../../redux/types';
import * as actions from './actions';

export const initialStore:IMoviesStore = {
  result: null,
  error: null,
  loading: false,
  movies: null,
  moviesByGenre: null,
  qt: 0,
}

export default function moviesReducer(state = initialStore, action) {
  switch (action.type) {
    case actions.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.FETCH_MOVIES_BY_GENRE_SUCCESS:
      return {
        ...state,
        moviesByGenre: action.payload.data,
        loading: false,
        error: null
      };
    case actions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        result: action.payload,
        movies: action.payload.data,
        qt: action.payload.total,
        loading: false,
        error: null
      };
    case actions.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        result: [],
        movies: [],
        qt: 0,
        moviesByGenre:[],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}