import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.searchVm, action) {
  switch (action.type) {
    case types.SEARCH_RESULTS_RECEIVED:
      return {searchText: state.searchText, results: action.results};
    case types.SEARCH_CLEAR_RESULTS:
      return {searchText: '', results: []};
    case types.SEARCH_TEXT_CHANGE:
      return {searchText: action.text, results: [...state.results]};
    default:
      return state;
  }
}