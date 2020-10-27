import * as React from 'react';

import MoviesList from '../movies-list';
import { IData, IMovieDetails } from '../../types';

import MoviesResultsInfo from '../movies-results-info';

interface IMoviesResultsProps {
  result: IData,
  onClick?: (data: IMovieDetails) => void
}

const MoviesResults:React.FC<IMoviesResultsProps> = ({result, onClick}) => {
  return(
    <>  
      <MoviesList data={result.data} onItemClick={onClick}/>
    </>
  )
}

export default MoviesResults;
