import * as React from 'react';
import Poster from '../../../common/components/poster';
import { IMovieDetails } from '../../../../models/types';
import { getYearFromString } from '../../../../helpers/helpers';

interface IMovieViewProps {
  data: IMovieDetails,
  goToMoviePage: () => void,
}

const MovieView:React.FC<IMovieViewProps> = ({ data, goToMoviePage }) => {
  const { title, poster_path, genres, release_date } = data;
  const date = getYearFromString(release_date);
  return (
    <div className="movie" onClick={goToMoviePage}>

    <Poster title={title} poster_path={poster_path} classes="movie_poster"/>
    <div className="movie_details">
      <p className="movie_title">{title}</p>
      <p className="movie_date">{date}</p>
    </div>

    <p className="movie_genres">{genres.join(' & ')}</p>

  </div>
  )
}

export default MovieView;
