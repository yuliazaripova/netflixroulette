import * as actions from './actions';
import { INavigationStore } from '../../redux/types';

export const initialStore: INavigationStore = {
  movie: null,
  page: 'main',
  movieGenre: null
}

export default function navigationReducer(state = initialStore, action) {
  switch (action.type) {
    case actions.TO_MOVIE_PAGE:
      return {
        ...state,
        movie: action.payload,
        movieGenre: action.payload.genres[0],
        page: 'movie'
      }
    case actions.TO_MAIN_PAGE:
      return {
        ...state,
        movie: null,
        movieGenre: null,
        page: 'main'
      }
    default:
      return state;
  }
}
