import * as actions from './actions'
import { ISearchStore } from '../../redux/types';

export const initialStore:ISearchStore = {
  searchBy: 'title',
  sortBy: 'release_date',
  searchValue: '',
}

export default function searchReducer(state = initialStore, action) {
  switch (action.type) {
    case actions.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case actions.SET_SEARCH_BY:
      return {
        ...state,
      searchBy: action.payload
      }
    case actions.SET_RESULT_SORT:
      return {
        ...state,
      sortBy: action.payload
      }
    
    default:
      return state;
  }
}
