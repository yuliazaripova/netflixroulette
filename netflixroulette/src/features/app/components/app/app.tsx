import * as React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../common/components/header';
import SearchForm from '../../../search/components/search-form';
import MoviesResultsInfo from '../../../movie-list/components/movies-results-info';
import Footer from '../../../common/components/footer';
import MovieDetails from '../../../movie-details/components/movie-details';
import GenresInfo from '../../../movie-list/components/genres-info';
import InfoContainer from '../../../common/components/info-container';
import MoviesList from '../../../movie-list/components/movies-list';
import  { getPage } from '../../../../services/navigation/selectors';

import './app.css';

const App:React.FC = () => {

const page = useSelector(getPage);

if (page === 'main') {
  return(
    <>
      <Header/>
      <SearchForm />
      <InfoContainer>
        <MoviesResultsInfo />
      </InfoContainer>
      <MoviesList />
      <Footer />
    </>
   )
  } else if (page === 'movie') {
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
}

export default App;
