import * as React from 'react';
import Header from '../../features/common/components/header';
import SearchForm from '../../features/search/components/search-form';
import MoviesResultsInfo from '../../features/movie-list/components/movies-results-info';
import Footer from '../../features/common/components/footer';
import InfoContainer from '../../features/common/components/info-container';
import MoviesList from '../../features/movie-list/components/movies-list';
import MainContent from '../../features/common/components/main-content';

const Main:React.FC = () => {
  return (
    <>
      <Header/>
      <MainContent>
        <SearchForm />
        <InfoContainer>
          <MoviesResultsInfo />
        </InfoContainer>
        <MoviesList />
      </MainContent>
      <Footer />
  </>
  )
}

export default Main;
