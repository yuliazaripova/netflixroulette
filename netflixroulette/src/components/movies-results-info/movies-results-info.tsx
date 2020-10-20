import * as React from 'react';

import './movies-results-info.css';

interface IMoviesResultsInfo {
  qt: number;
};

const MoviesResultsInfo:React.FC<IMoviesResultsInfo> = ({qt}: IMoviesResultsInfo) => {
  return(
    <>
      
      <span className="movie-results-info_qt">{qt} movies found</span>
      <div className="movie-results-info_radio-toolbar">
        
        <span className="movie-results-info_radio-label">Sort by</span>
        <input type="radio" id="release" name="radioSort" value="release" checked/>
        <label htmlFor="release">release date</label>

        <input type="radio" id="rating" name="radioSort" value="rating"/>
        <label htmlFor="rating">rating</label>
      </div>


    </>
  )
}

export default MoviesResultsInfo;
