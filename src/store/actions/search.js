import * as actionTypes from './actionTypes';

export const getSearchTerm = (term) => {
    return {
        type: actionTypes.GET_SEARCH_TERM,
        searchTerm: term
    }
}