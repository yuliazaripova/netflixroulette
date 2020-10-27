import * as React from 'react';
import Movie from '../movie';
import { IMovieDetails } from '../../types';

import './movies-list.css';

interface IMovieListProps {
  data: IMovieDetails[],
  onItemClick: (data:IMovieDetails) => void
}


const MoviesList:React.FC<IMovieListProps> = ({data, onItemClick}) => {

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
