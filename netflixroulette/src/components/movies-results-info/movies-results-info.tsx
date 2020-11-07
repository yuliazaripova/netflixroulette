import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RadioToolbar from '../radio-toolbar';
import { setResultSort } from '../../services/search/actions';
import { getMoviesQt } from '../../services/movies/selectors';
import { fetchMovies } from '../../services/movies/actions';

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
  const qt = useSelector(getMoviesQt);
  const dispatch = useDispatch();

  const updateResult = React.useCallback((v:string) => {
    dispatch(setResultSort(v));
    dispatch(fetchMovies());
  }, []);

  return(
    <>
      <span className="movie-results-info_qt">{qt} movies found</span>
      <RadioToolbar name="movie-results-info"
                    items={items}
                    onChange={updateResult}/>
    </>
  )
}

export default MoviesResultsInfo;
