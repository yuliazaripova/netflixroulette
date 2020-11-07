import { IInitialStore } from "../../redux/types";

export const getSearchValue = (state:IInitialStore) => state.searchReducer.searchValue;

export const getSortBy = (state:IInitialStore) => state.searchReducer.sortBy;

export const getSearchBy = (state:IInitialStore) => state.searchReducer.searchBy;
