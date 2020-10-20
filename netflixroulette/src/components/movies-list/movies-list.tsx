import * as React from 'react';
import Movie from '../movie';
import { IMovieList, IMovieDetails } from '../../types';

import './movies-list.css';


const MoviesList:React.FC<IMovieList> = ({data, onItemClick}) => {
  return(
    <div className="movie-list">
    {data.map(movie => 
      <Movie  key = {movie.id}
              data={movie}
              onClick={onItemClick}
        
        />
        )}
    </div>
  )
}

export default MoviesList;
