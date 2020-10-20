import * as React from 'react';

import Header from '../../containers/header';
import SearchForm from '../search-form';
import MoviesResultsInfo from '../movies-results-info';
import MoviesResults from '../movies-results';
import Footer from '../../containers/footer';
import MovieDetails from '../movie-details';
import GenresInfo from '../genres-info';

import {IMovieDetails} from '../../types';

import InfoContainer from '../../containers/info-container';
import BackBtn from '../back-btn';

import result from '../../data/data';


import './app.css';
import ErrorButton from '../../error-btn';
import ErrorBoundary from '../error-boundary';



const movieGenre = result.data[0].genres[0];
const scrollUp:() => void = () => window.scrollTo(0, 0);

interface IAppProps {
  
}

interface IStateApp {
  movie: IMovieDetails | null
}

export default class App extends React.Component<IAppProps, IStateApp> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  toMoviePage(data: IMovieDetails) {
    this.setState({
      movie: data
    })
    scrollUp();
  }

  toMainPage() {
    this.setState({
      movie: null
    })
  }

  render() {
    const { movie } = this.state;
    let page:React.ReactNode;
    if (this.state.movie) {
      page = <>
              <Header onClick={() => this.toMainPage()} renderBtn={true}/>
              <MovieDetails {...movie}/>
              <InfoContainer>
                <GenresInfo genre={movieGenre}/>
              </InfoContainer>
              <MoviesResults {...result} onClick={(data) => this.toMoviePage(data)}/>
              <Footer />
            </> 
    } else {
      page = <>
              <Header/>
              <SearchForm />
              <InfoContainer>
                <MoviesResultsInfo qt={result.total} />
              </InfoContainer>
              <MoviesResults {...result} onClick={(data) => this.toMoviePage(data)}/>
              <Footer />
             </>
    }
    return (
      
      <ErrorBoundary>
        {page}
      </ErrorBoundary>
     
    );
  }
}
