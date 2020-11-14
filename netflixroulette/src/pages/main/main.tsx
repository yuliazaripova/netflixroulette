import * as React from 'react';
import SearchForm from '../../features/search/components/search-form';
import MoviesResultsInfo from '../../features/movie-list/components/movies-results-info';
import InfoContainer from '../../features/common/components/info-container';
import MoviesList from '../../features/movie-list/components/movies-list';
import MainContent from '../../features/app/components/main-content';

const Main:React.FC = () => {
  return (
      <MainContent>
        <SearchForm />
        <InfoContainer>
          <MoviesResultsInfo />
        </InfoContainer>
        <MoviesList />
      </MainContent>
  )
}

export default Main;
