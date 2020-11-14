import { IData, IMovieDetails } from '../models/types'

export type IMoviesStore = {
  result?: IData,
  error?: any | null,
  loading?: boolean,
  movies?: IMovieDetails[],
  moviesByGenre?: IMovieDetails[],
  qt?: number,
}

export interface INavigationStore {
  movie?: IMovieDetails,
  page?: string,
  movieGenre?: string,
}

export interface ISearchStore {
  searchBy?: string,
  sortBy?: string,
  searchValue?: string,
}

export interface IInitialStore {
  moviesReducer: IMoviesStore,
  navigationReducer: INavigationStore,
  searchReducer: ISearchStore
}
