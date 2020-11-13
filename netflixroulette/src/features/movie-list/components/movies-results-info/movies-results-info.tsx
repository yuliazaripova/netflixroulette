import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RadioToolbar from '../../../common/components/radio-toolbar';
import { setResultSort } from '../../../../services/search/actions';
import { getSearchValue } from '../../../../services/search/selectors';
import { getMoviesQt } from '../../../../services/movies/selectors';
import { fetchMovies } from '../../../../services/movies/actions';

import './movies-results-info.css';

const items = [
  {
    id:"release_date",
    value:"release date",
    isChecked:true
  },
  {
    id:"vote_average",
    value:"rating"
  }
];

const MoviesResultsInfo:React.FC = () => {
  const dispatch = useDispatch();
  const qt = useSelector(getMoviesQt);
  const searchValue = useSelector(getSearchValue);

  const _onChange = React.useCallback((sortValue:string) => {
    dispatch(setResultSort(sortValue));
    if (searchValue) {
      dispatch(fetchMovies())
    }
  }, [searchValue]);

  return(
    <>
      <span className="movie-results-info_qt">{qt} movies found</span>
      <RadioToolbar name="movie-results-info"
                    items={items}
                    onChange={_onChange}/>
    </>
  )
}

export default MoviesResultsInfo;
