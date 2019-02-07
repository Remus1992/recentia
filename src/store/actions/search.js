import * as actionTypes from './actionTypes';

export const submitSearchStart = () => {
    return {
        type: actionTypes.SUBMIT_SEARCH_START
    }
};

export const submitSearchSuccess = () => {
    return {
        type: actionTypes.SUBMIT_SEARCH_SUCCESS
    }
};

export const submitSearchFail = (error) => {
    return {
        type: actionTypes.SUBMIT_SEARCH_FAIL,
        error: error
    }
};

export const getSearchTerm = (term) => {
    return {
        type: actionTypes.GET_SEARCH_TERM,
        searchTerm: term
    }
};

