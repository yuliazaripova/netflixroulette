import * as React from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
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
  let history = useHistory();

  const goToMoviePage = () => {
    history.push(`/film/${data.id}`);
    window.scrollTo(0,0);
    dispatch(toMoviePage(data));
    dispatch(fetchMoviesByGenres());
  }

  return (
    <MovieView data={data} goToMoviePage={goToMoviePage} />
  )
}

export default Movie;
