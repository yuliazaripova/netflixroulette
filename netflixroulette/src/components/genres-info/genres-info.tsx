import * as React from 'react';

import './genres-info.css';

interface IGenresInfo {
  genre: string;
};

const GenresInfo:React.FC<IGenresInfo> = ({genre}: IGenresInfo) => {
  return(
    <>
    <span className="genre-info">Films by {genre} genre</span>
    </>
  )
}

export default GenresInfo;
