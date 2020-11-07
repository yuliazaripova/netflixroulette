import * as React from 'react';
import { useDispatch } from 'react-redux';
import SearchFormView from '../search-form-view';
import { setSearchValue, setSearchBy } from '../../services/search/actions';
import { fetchMovies } from '../../services/movies/actions';

import './search-form.css';

const SearchForm:React.FC = () => {
  const dispatch = useDispatch();
  const searchMovies = (e: React.FormEvent<EventTarget>) => { 
    e.preventDefault();
    dispatch(fetchMovies())
  };

  const updateSearchValue = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value.trim()))
  }, []);

  const updateSearchBy = React.useCallback((v:string) => {
    dispatch(setSearchBy(v));
    dispatch(fetchMovies());
  }, []);

  return(
    <SearchFormView searchMovies = {searchMovies}
                    updateSearchValue ={updateSearchValue}
                    updateSearchBy = {updateSearchBy}
    />
  )
}

export default SearchForm;
