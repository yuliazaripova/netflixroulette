import { combineReducers } from 'redux';
import moviesReducer from '../services/movies/reducers';
import searchReducer from '../services/search/reducers';
import navigationReducer from '../services/navigation/reducers';

const reducer = combineReducers({
  moviesReducer,
  searchReducer,
  navigationReducer
});

export default reducer;
