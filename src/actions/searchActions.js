import * as types from './actionTypes';
import * as dataContext from '../data';

export function searchText(text) {

  if(text.length < 3) {
    return searchTextChanged(text);
  }

  return dispatch => {
    dispatch(searchTextChanged(text));
    return dataContext.searchSuburbs(text)
      .then(data => dispatch(searchResultsReceived(data)));
  };
}

export function searchTextChanged(text) {
  return {type: types.SEARCH_TEXT_CHANGE, text};
}

export function searchResultsReceived(results) {
  return {type: types.SEARCH_RESULTS_RECEIVED, results};
}
