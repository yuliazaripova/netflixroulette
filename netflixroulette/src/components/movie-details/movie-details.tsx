import * as React from 'react';
import Poster from '../poster';
import {IMovieDetails} from '../../types';
import {getYearFromString} from '../../helpers/helpers';
import './movie-details.css';

type TMovieDetailsProps = IMovieDetails;

const MovieDetails:React.FC<TMovieDetailsProps> = ({id, title, runtime, overview,  release_date, poster_path, genres, vote_average}) => {
  console.log(poster_path)
  const date = getYearFromString(release_date);
  return(
  <div className="movie-details">

    <Poster title={title} poster_path={poster_path} classes="movie-details_poster"/>

    <div className="movie-details_details">
        <h2 className="movie-details_title">{title}</h2>
        <span className="movie-details_vote">{vote_average}</span>
      <p>
        <span className="movie-details_date">{date}</span>
        <span className="movie-details_runtime">{runtime} min</span>
      </p>
      <p className="movie-details_overview">{overview}</p>
    </div>

  </div>
  )
}

export default MovieDetails;
