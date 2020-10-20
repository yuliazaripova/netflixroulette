import * as React from 'react';

import MoviesList from '../movies-list';
import { IMoviesResults } from '../../types';

import MoviesResultsInfo from '../movies-results-info';

const MoviesResults:React.FC<IMoviesResults> = ({data, onClick}) => {
  return(
    <>  
      <MoviesList data={data} onItemClick={onClick}/>
    </>
  )
}

export default MoviesResults;
