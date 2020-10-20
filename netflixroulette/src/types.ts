export interface IMovieDetails {
  id: number,
  title: string,
  tagline?: string,
  vote_average?: number,
  vote_count?: number,
  release_date: string,
  poster_path: string,
  overview?: string,
  budget?: number,
  revenue?: number,
  runtime?: number,
  genres: string[],
}

export type TMoviesList = IMovieDetails[];

export interface IMovieList {
  data: TMoviesList
  onItemClick: (data:IMovieDetails) => void
}

export interface IMoviesResults {
  data: TMoviesList,
  total: number,
  offset: number,
  limit: number
  onClick?: (data: IMovieDetails) => void
}
