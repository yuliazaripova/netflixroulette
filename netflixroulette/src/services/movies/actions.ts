import { store } from '../../redux/store';
import { IData } from '../../types';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const moviesRequested = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  }
}

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const moviesLoaded = (data:IData) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: data
  }
}

export const FETCH_MOVIES_BY_GENRE_SUCCESS = 'FETCH_MOVIES_BY_GENRE_SUCCESS';
export const moviesByGenreLoaded = (data:IData) => {
  return {
    type: FETCH_MOVIES_BY_GENRE_SUCCESS,
    payload: data
  }
}

export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const moviesError = (error:never) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  }
}

export const fetchMovies = () => {
  const state = store.getState();
  const { searchValue, searchBy, sortBy } = state.searchReducer;
  return (dispatch) => {
      dispatch(moviesRequested());
      fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${searchValue}&searchBy=${searchBy}`)
          .then((response) => response.json())
          .then((items) => dispatch(moviesLoaded(items)))
          .catch((err:never) => dispatch(moviesError(err)));
  }
}

export const fetchMoviesByGenres = () => {
  const state = store.getState();
  const { movieGenre } = state.navigationReducer;
  return (dispatch) => {
      dispatch(moviesRequested());
      fetch(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&search=${movieGenre}&searchBy=genres`)
          .then((response) => response.json())
          .then((items) => dispatch(moviesByGenreLoaded(items)))
          .catch((err:never) => dispatch(moviesError(err)));
  }
}
