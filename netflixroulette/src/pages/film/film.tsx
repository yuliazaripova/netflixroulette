import * as React from 'react';
import Header from '../../features/common/components/header';
import GenresInfo from '../../features/movie-list/components/genres-info';
import MovieDetails from '../../features/movie-details/components/movie-details';
import Footer from '../../features/common/components/footer';
import InfoContainer from '../../features/common/components/info-container';
import MoviesList from '../../features/movie-list/components/movies-list';

const Film:React.FC = () => {
  return (
    <>
      <Header/>
      <MovieDetails/>
      <InfoContainer>
          <GenresInfo />
      </InfoContainer>
      <MoviesList />
      <Footer />
    </>
  )
}

export default Film;
