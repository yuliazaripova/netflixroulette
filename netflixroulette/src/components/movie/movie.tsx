import * as React from 'react';
import Poster from '../poster';
import { IMovieDetails } from '../../types';

import {getYearFromString} from '../../helpers/helpers';

import './movie.css';

interface IMovieProps {
  data: IMovieDetails,
  onClick: (data: IMovieDetails) => void
}

const Movie:React.FC<IMovieProps> = (props) => {
  const { title, poster_path, genres, release_date } = props.data;
  const date = getYearFromString(release_date);

  const clickHandler = () => {
    props.onClick(props.data)
  }

  return (
    <div className="movie" onClick={clickHandler}>

      <Poster title={title} poster_path={poster_path} classes="movie_poster"/>
      <div className="movie_details">
        <p className="movie_title">{title}</p>
        <p className="movie_date">{date}</p>
      </div>

      <p className="movie_genres">{genres.join(' & ')}</p>

    </div>
  )
}

export default Movie;
