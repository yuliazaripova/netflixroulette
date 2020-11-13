import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import SearchFormView from '../search-form-view';
import { setSearchValue, setSearchBy } from '../../../../services/search/actions';
import { getSearchBy, getSearchValue } from '../../../../services/search/selectors';
import { fetchMovies, fetchMoviesBySearch } from '../../../../services/movies/actions';
import { isSearch } from '../../../../helpers/helpers';

import './search-form.css';

const SearchForm:React.FC = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(getSearchValue);
  const searchBy = useSelector(getSearchBy)
  const history = useHistory();
  const location = useLocation();
  
  React.useEffect(() => {
    if (isSearch(location.pathname)) {
      const search = location.search.slice(1);
      dispatch(setSearchValue(search));
      dispatch(fetchMoviesBySearch(search));
    }
  }, [])
  
  const findMovies = () => {
     if (searchValue) {
      dispatch(fetchMovies());
    }
  }

  const searchMovies = (e: React.FormEvent<EventTarget>) => { 
    e.preventDefault();
    findMovies();
    history.push({
      pathname: '/search/',
      search: searchValue
    })
  };

  const updateSearchValue = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value.trim()))
  }, []);
  
  const updateSearchBy = React.useCallback((v:string) => {
    dispatch(setSearchBy(v));
    findMovies();
  }, [searchValue]);

  return(
    <SearchFormView searchMovies = {searchMovies}
                    updateSearchValue ={updateSearchValue}
                    updateSearchBy = {updateSearchBy}
    />
  )
}

export default SearchForm;
