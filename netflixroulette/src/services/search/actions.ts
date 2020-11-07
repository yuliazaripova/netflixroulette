export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const setSearchValue = (value:string) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: value
  }
}

export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const setSearchBy = (value:string) => {
  return {
    type: SET_SEARCH_BY,
    payload: value
  }
}

export const SET_RESULT_SORT = 'SET_RESULT_SORT';
export const setResultSort = (value:string) => {
  return {
    type: SET_RESULT_SORT,
    payload: value
  }
}
