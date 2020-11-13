import moviesReducer, { initialStore } from './reducers';
import * as actions from './actions';

describe('Movie reducer', () => {
  const test = {
    data: ['test'],
    total: 1
  }
  it('should return the initial state', () => {
    expect(moviesReducer(initialStore, {})).toEqual(initialStore)
  });
  it('should handle FETCH_MOVIES_REQUEST', () => {
    expect(moviesReducer(initialStore, actions.moviesRequested())).toEqual({
      ...initialStore,
      loading: true,
      error: null
    })
  });
  it('should handle FETCH_MOVIES_BY_GENRE_SUCCESS', () => {
    expect(moviesReducer(initialStore, {
      type: actions.FETCH_MOVIES_BY_GENRE_SUCCESS,
      payload: test
    })).toEqual({
      ...initialStore,
      moviesByGenre: test.data,
      loading: false,
      error: null
    })
  });
  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(moviesReducer(initialStore, {
      type: actions.FETCH_MOVIES_SUCCESS,
      payload: test
    })).toEqual({
      ...initialStore,
      result: test,
      movies: test.data,
      qt: test.total,
      loading: false,
      error: null
    })
  });
  it('should handle FETCH_MOVIES_FAILURE', () => {
    expect(moviesReducer(initialStore, {
      type: actions.FETCH_MOVIES_FAILURE,
      payload: 'error'
    })).toEqual({
      ...initialStore,
      result: [],
      movies: [],
      qt: 0,
      moviesByGenre:[],
      loading: false,
      error: 'error'
    })
  });
})