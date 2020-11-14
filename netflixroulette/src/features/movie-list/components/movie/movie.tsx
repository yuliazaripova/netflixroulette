import * as React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import MovieView from '../movie-view';
import { IMovieDetails } from '../../../../models/types';
import { toMoviePage } from '../../../../services/navigation/actions';
import { fetchMoviesByGenres } from '../../../../services/movies/actions';

import './movie.css';

interface IMovieProps {
  data: IMovieDetails,
}

const Movie:React.FC<IMovieProps> = ({ data }) => {
  const dispatch = useDispatch();

  const goToMoviePage = () => {
    window.scrollTo(0,0);
    dispatch(toMoviePage(data));
    dispatch(fetchMoviesByGenres());
  }

  return (
    <Link to={`/film/${data.id}`}>
      <MovieView data={data} goToMoviePage={goToMoviePage} />
    </Link>
  )
}

export default Movie;
