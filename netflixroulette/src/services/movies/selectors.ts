import { IInitialStore } from "../../redux/types";

export const getMovies = (state:IInitialStore) => state.moviesReducer.movies;

export const getMoviesQt = (state:IInitialStore) => state.moviesReducer.qt;

export const getMoviesByGenres = (state:IInitialStore) => state.moviesReducer.moviesByGenre;

export const getLoading = (state:IInitialStore) => state.moviesReducer.loading;
