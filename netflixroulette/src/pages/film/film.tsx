import * as React from 'react';
import GenresInfo from '../../features/movie-list/components/genres-info';
import MovieDetails from '../../features/movie-details/components/movie-details';
import InfoContainer from '../../features/common/components/info-container';
import MoviesList from '../../features/movie-list/components/movies-list';

const Film:React.FC = () => {
  return (
    <>
      <MovieDetails/>
      <InfoContainer>
          <GenresInfo />
      </InfoContainer>
      <MoviesList />
    </>
  )
}

export default Film;
