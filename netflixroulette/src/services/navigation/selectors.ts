import { IInitialStore } from "../../redux/types";

export const getPage = (state:IInitialStore) => state.navigationReducer.page;

export const getMovie = (state:IInitialStore) => state.navigationReducer.movie;

export const getMovieGenre = (state:IInitialStore) => state.navigationReducer.movieGenre;
