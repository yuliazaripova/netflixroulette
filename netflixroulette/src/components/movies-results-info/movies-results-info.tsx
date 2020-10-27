import * as React from 'react';
import RadioToolbar from '../radio-toolbar';

import './movies-results-info.css';

interface IMoviesResultsInfo {
  qt: number;
};

const MoviesResultsInfo:React.FC<IMoviesResultsInfo> = ({qt}: IMoviesResultsInfo) => {
  return(
    <>
      <span className="movie-results-info_qt">{qt} movies found</span>
      <RadioToolbar name="movie-results-info"
                    items={[
                            {
                              id:"release",
                              value:"release date",
                              isChecked:true
                            },
                            {
                              id:"rating"
                            }
                      ]}/>
    </>
  )
}

export default MoviesResultsInfo;
