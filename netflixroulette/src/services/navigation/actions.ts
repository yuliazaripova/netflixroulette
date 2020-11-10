import { IMovieDetails } from '../../models/types';

export const TO_MOVIE_PAGE = 'TO_MOVIE_PAGE';
export const toMoviePage = (movie:IMovieDetails) => {
  return {
    type: TO_MOVIE_PAGE,
    payload: movie,
  }
}

export const TO_MAIN_PAGE = 'TO_MAIN_PAGE';
export const toMainPage = () => {
  return {
    type: TO_MAIN_PAGE,
  }
}
