import * as React from 'react';
import { useSelector } from 'react-redux';
import { getMovieGenre } from '../../services/navigation/selectors';

import './genres-info.css';

const GenresInfo:React.FC = () => {
  const genre = useSelector(getMovieGenre)
  return (
    <span className="genre-info">Films by {genre} genre</span>
  )
}

export default GenresInfo;
