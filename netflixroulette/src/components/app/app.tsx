import * as React from 'react';


import Header from '../../containers/header';
import SearchForm from '../search-form';
import MoviesResultsInfo from '../movies-results-info';
import MoviesResults from '../movies-results';
import Footer from '../../containers/footer';
import MovieDetails from '../movie-details';
import GenresInfo from '../genres-info';

import Spinner from '../spinner';

import {IMovieDetails, IData} from '../../types';

import InfoContainer from '../../containers/info-container';
import BackBtn from '../back-btn';

import result from '../../data/data';


import './app.css';

import ErrorBoundary from '../error-boundary';


export async function http<T>(req:string): Promise<T> {
  const response = await fetch(req);
  return response.json() 
}

const useData = () => {
  const [result, setResult] = React.useState<IData | null>(null);
  
  React.useEffect(() => {
    const data = http<IData>('https://reactjs-cdp.herokuapp.com/movies?search=stars').then(data => setResult(data))
  }, [])
  return result;
}
interface IAppProps {
  
}

const App:React.FC<IAppProps> = () => {

  const [movie, setMovie] = React.useState<IMovieDetails | null>(null);
  const result = useData();
  
  const toMoviePage = (data: IMovieDetails):void => {
    setMovie(data);
    window.scrollTo(0, 0);
  }
  const toMainPage = ():void => {
    setMovie(null);
  }

  if (result) {
    const {data} = result;
    const movieGenre = data[0].genres[0];
    
    if (movie) {
      return( <ErrorBoundary>
                <Header onClick={() => toMainPage()} renderBtn={true}/>
                <MovieDetails {...movie}/>
                <InfoContainer>
                  <GenresInfo genre={movieGenre}/>
                </InfoContainer>
                <MoviesResults result={result} onClick={(data) => toMoviePage(data)}/>
                <Footer />
            </ErrorBoundary> )
    } else {
      return( <ErrorBoundary>
                <Header/>
                <SearchForm />
                <InfoContainer>
                  <MoviesResultsInfo qt={result.total} />
                </InfoContainer>
                <MoviesResults result={result} onClick={(data) => toMoviePage(data)}/>
                <Footer />
            </ErrorBoundary>
      )
    }
  }
  return <Spinner />
}

export default App;
