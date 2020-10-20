import * as React from 'react';
import {IMovieDetails} from '../../types';
import moviePoster from '../../../assets/movie-poster.jpg';
import {getYearFromString} from '../../helpers/helpers';
import './movie-details.css';

const MovieDetails:React.FC<IMovieDetails> = ({id, title, runtime, overview,  release_date, poster_path, genres, vote_average}) => {
  console.log(genres)
  const date = getYearFromString(release_date);
  return(
  <div className="movie-details">
    <img className="movie-details_poster"
         alt={`The movie titled: ${title}`}
         src={moviePoster}
        />
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
