import * as React from 'react';
import { useSelector } from 'react-redux';
import MovieDetailsView from '../movie-details-view';
import { IMovieDetails } from '../../types';
import  {getYearFromString } from '../../helpers/helpers';
import { IInitialStore } from '../../redux/types';
import { getMovieDetails } from '../../services/navigation/selectors';

import './movie-details.css';


const MovieDetails:React.FC<IMovieDetails> = () => {
  const movie:IMovieDetails = useSelector<IInitialStore>(getMovieDetails)
  const { title, runtime, overview,  release_date, poster_path, vote_average } = movie;
  const date = getYearFromString(release_date);
  
  return(
    <MovieDetailsView title={title}
                      runtime={runtime} 
                      overview={overview}  
                      date={date} 
                      poster_path={poster_path} 
                      vote_average={vote_average}
    />
  )
}

export default MovieDetails;
