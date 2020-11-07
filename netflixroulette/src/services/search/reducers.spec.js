import searchReducer, { initialStore } from './reducers';
import * as actions from './actions';

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(searchReducer(initialStore, {})).toEqual(initialStore)
  });
  it('should handle SET_SEARCH_VALUE', () => {
    expect(searchReducer(initialStore, {
      type: actions.SET_SEARCH_VALUE,
      payload: 'test'
    })).toEqual({
      ...initialStore,
      searchValue: 'test'
    })
  });
  it('should handle SET_RESULT_SORT', () => {
    expect(searchReducer(initialStore, {
      type: actions.SET_RESULT_SORT,
      payload: 'test'
    })).toEqual({
      ...initialStore,
      sortBy: 'test'
    })
  });
  it('should handle SET_SEARCH_BY', () => {
    expect(searchReducer(initialStore, {
      type: actions.SET_SEARCH_BY,
      payload: 'test'
    })).toEqual({
      ...initialStore,
      searchBy: 'test'
    })
  });
});