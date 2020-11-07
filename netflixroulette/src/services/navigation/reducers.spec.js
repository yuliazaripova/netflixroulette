import navigationReducer, { initialStore } from './reducers';
import * as actions from './actions';

describe('Navigation reducer', () => {
  it('should return the initial state', () => {
    expect(navigationReducer(initialStore, {})).toEqual(initialStore)
  });
  it('should handle TO_MOVIE_PAGE', () => {
    const testMovie = {
      title: "test title",
      vote_average: 1,
      date: 2017,
      poster_path: "test poster",
      overview: "test overview",
      runtime: 1,
      genres: ["test genre1", "test genre2"],
    };
    expect(navigationReducer(initialStore, {
      type: actions.TO_MOVIE_PAGE,
      payload: testMovie
    })).toEqual({
      page: 'movie',
      movie: testMovie,
      movieGenre: testMovie.genres[0]
    })
  });
  it('should handle TO_MAIN_PAGE', () => {
    expect(navigationReducer(initialStore, {
      type: actions.TO_MAIN_PAGE
    })).toEqual({
      page: 'main',
      movie: null,
      movieGenre: null
    })
  });
});
