import * as React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../containers/header';
import SearchForm from '../search-form';
import MoviesResultsInfo from '../movies-results-info';
import Footer from '../../containers/footer';
import MovieDetails from '../movie-details';
import GenresInfo from '../genres-info';
import InfoContainer from '../../containers/info-container';
import MoviesList from '../movies-list';
import  { getPage } from '../../services/navigation/selectors';

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
