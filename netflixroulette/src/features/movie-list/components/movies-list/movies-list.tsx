import * as React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../movie';
import Spinner from '../../../common/components/spinner';
import { IMovieDetails } from '../../../../models/types';
import { getMovies, getMoviesQt, getMoviesByGenres, getLoading } from '../../../../services/movies/selectors';
import { getPage, getMovieGenre } from '../../../../services/navigation/selectors';

import './movies-list.css';

const MoviesList:React.FC = () => {
  const movies:IMovieDetails[] = useSelector(getMovies);
  const moviesWithGenres:IMovieDetails[] = useSelector(getMoviesByGenres);
  const page = useSelector(getPage);
  const genre = useSelector(getMovieGenre);
  const qt = useSelector(getMoviesQt);
  const isLoading = useSelector(getLoading);

  let moviesToRender:IMovieDetails[] = null;
  if (page === 'movie') {
    moviesToRender = moviesWithGenres;
  } else {
    moviesToRender = movies;
  }

  if (isLoading) {
    return (
      <div className="movie-list">
        <Spinner />
      </div>
    )
  } else if (!qt && !genre) {
    return (
      <div className="movie-list">
        <h2 className="movie-list_info-title">No movies found</h2>
      </div>
    )
  } else {
      return(
        <div className="movie-list">
          {moviesToRender.map(movie => 
            <Movie  key = {movie.id}
                    data={movie}        
            />
          )}
        </div>
      )
    }
}

export default MoviesList;
