import * as React from 'react';
import Poster from '../poster';

interface IMovieViewProps {
  title: string,
  poster_path: string,
  genres: string[], 
  date: number,
  goToMoviePage: () => void,
}

const MovieView:React.FC<IMovieViewProps> = ({ title, poster_path, genres, date, goToMoviePage }) => {
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
