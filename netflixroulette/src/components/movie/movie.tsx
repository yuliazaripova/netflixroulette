import * as React from 'react';
import { useDispatch } from 'react-redux'
import MovieView from '../movie-view';
import { IMovieDetails } from '../../types';
import { toMoviePage } from '../../services/navigation/actions';
import { getYearFromString } from '../../helpers/helpers';
import { fetchMoviesByGenres } from '../../services/movies/actions';

import './movie.css';

interface IMovieProps {
  data: IMovieDetails,
}

const Movie:React.FC<IMovieProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { title, poster_path, genres, release_date } = data;
  const date = getYearFromString(release_date);

  const goToMoviePage = () => {
    window.scrollTo(0,0);
    dispatch(toMoviePage(data));
    dispatch(fetchMoviesByGenres());
  }

  return (
    <MovieView title={title} poster_path={poster_path} genres={genres} date={date} goToMoviePage={goToMoviePage} />
  )
}

export default Movie;
