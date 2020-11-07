import * as React from 'react';
import Poster from '../poster';

interface IMovieDetailsViewProps {
  title: string,
  runtime: number,
  overview: string,
  poster_path: string,
  vote_average: number, 
  date: number,
}

const MovieDetailsView:React.FC<IMovieDetailsViewProps> = ({ title, runtime, overview,  date, poster_path, vote_average }) => {
  return (
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

export default MovieDetailsView;
