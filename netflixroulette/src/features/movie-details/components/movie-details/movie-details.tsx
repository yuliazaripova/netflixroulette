import * as React from 'react';
import { useSelector } from 'react-redux';
import MovieDetailsView from '../movie-details-view';
import { IMovieDetails } from '../../../../models/types';
import { getMovie } from '../../../../services/navigation/selectors';

import './movie-details.css';

const MovieDetails:React.FC<IMovieDetails> = () => {
  const data:IMovieDetails = useSelector(getMovie);

  return(
    <MovieDetailsView data={data}/>
  )
}

export default MovieDetails;
