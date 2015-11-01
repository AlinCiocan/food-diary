import {ON_SEARCH_TERM_CHANGES} from '../actions/SearchFormAction';

export default function searchTermReducer(searchTerm = "", action){
  switch (action.type) {
    case ON_SEARCH_TERM_CHANGES:
      return action.searchTerm;
    default:
      return searchTerm;
  }
}
