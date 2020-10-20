import * as React from 'react';
import ErrorBoundary from '../error-boundary';
import { IMovieDetails } from '../../types';
import moviePoster from '../../../assets/movie-poster.jpg';
import {getYearFromString} from '../../helpers/helpers';

import './movie.css';

interface IMovieState {
  imgPath: string,
  hasError: boolean,
}

interface IProps {
  data: IMovieDetails,
  onClick: (data: IMovieDetails) => void
}

class Movie extends React.Component <IProps, IMovieState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      imgPath: this.props.data.poster_path,
      hasError: false
    };
  }
  // componentDidCatch() {
  //   this.setState({ hasError: true });
  // }
  // addDefaultSrc(e){
  //   if (e.target.src !== this.state.imgPath) {
  //      e.target.src="../../../assets/webpack.svg";
  //      console.log('errrrrr')
  //   }
  //   this.setState({ hasError: true });
  //   console.log(this.state)
  //  }
    
  

  // onError() {
    
  //   this.setState({ hasError: true });
  //   if (this.state.hasError) {
  //     this.setState({imgPath:'../../../assets/webpack.svg'})
  //   }
  //   console.log(this.state.hasError)
  // }
  
  render() {

    const {id, title, poster_path, genres, release_date} = this.props.data;
    const date = getYearFromString(release_date);
    const {hasError} = this.state;
    let img;
    try {
      img =  this.state.imgPath
    } catch {
      img = '../../../assets/webpack.svg'
    }
    return (

      <div className="movie" onClick={() => {
        this.props.onClick(this.props.data)}}>
          <img className="movie_poster"
               alt={`The movie titled: ${title}`}
               src={moviePoster}
        />
        
        <div className="movie_details">
        <p className="movie_title">{title}</p>
        <p className="movie_date">{date}</p>
        </div>

        <p className="movie_genres">{genres.join(' & ')}</p>

      </div>
    )
  }
}

export default Movie;
