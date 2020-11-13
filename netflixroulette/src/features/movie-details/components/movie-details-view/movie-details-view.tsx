import * as React from 'react';
import Poster from '../../../common/components/poster';
import  { getYearFromString } from '../../../../helpers/helpers';
import { IMovieDetails } from '../../../../models/types';

interface IMovieDetailsViewProps {
  data: IMovieDetails
}

const MovieDetailsView:React.FC<IMovieDetailsViewProps> = ({ data : { title, runtime, overview,  release_date, poster_path, vote_average }}) => {
  const date = getYearFromString(release_date);
  const rate = vote_average.toFixed(1);
  return (
    <div className="movie-details">
    <Poster title={title} poster_path={poster_path} classes="movie-details_poster"/>
    <div className="movie-details_details">
        <h2 className="movie-details_title">{title}</h2>
        <span className="movie-details_vote">{rate}</span>
      <p>
        <span className="movie-details_date">{date}</span>
        <span className="movie-details_runtime">{runtime} min</span>
      </p>
      <p className="movie-details_overview">{overview}</p>
    </div>
  </div>
  )
}

export default MovieDetailsView;
