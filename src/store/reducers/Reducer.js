import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

import session_id, {
    // search_term,
    query_type,
    input_language,
    output_language,
    input_vocabulary,
    output_vocabulary,
    semantic_type,
    clinical_variable,
    filter_by_value_sets,
    sort_order,
    row_off_set_arg,
    rows_in_subset_arg,
    ip_address,
    clinic_license,
    physician_license
} from "../../secret";


const initialState = {
    search_results: [],

    // query params
    session_id: session_id,
    search_term: '',
    query_type: query_type,
    input_language: input_language,
    output_language: output_language,
    input_vocabulary: input_vocabulary,
    output_vocabulary: output_vocabulary,
    semantic_type: semantic_type,
    clinical_variable: clinical_variable,
    filter_by_value_sets: filter_by_value_sets,
    sort_order: sort_order,
    row_off_set_arg: row_off_set_arg,
    rows_in_subset_arg: rows_in_subset_arg,
    ip_address: ip_address,
    clinic_license: clinic_license,
    physician_license: physician_license,

    // loading info
    error: false,
    loading: false,
    searchSubmit: false
};

const getInfoStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const getInfoFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const getInfoSuccess = (state, action) => {
    return updateObject(state, {
        search_results: action.search_results,
        loading: false
    });
};

const getSearchTerm = (state, action) => {
    const updatedState = {
        search_term: action.searchTerm,
    };
    return updateObject(state, updatedState);
};

const submitSearchStart = (state, action) => {
    return updateObject(state, {searchSubmit: true});
};

const submitSearchSuccess = (state, action) => {
    return updateObject(state, {searchSubmit: false});
};

const submitSearchFail = (state, action) => {
    return updateObject(state, {searchSubmit: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SEARCH_TERM:
            return getSearchTerm(state, action);
        case actionTypes.SUBMIT_SEARCH_START:
            return submitSearchStart(state, action);
        case actionTypes.SUBMIT_SEARCH_SUCCESS:
            return submitSearchSuccess(state, action);
        case actionTypes.SUBMIT_SEARCH_FAIL:
            return submitSearchFail(state, action);
        case actionTypes.GET_INFO_START:
            return getInfoStart(state, action);
        case actionTypes.GET_INFO_SUCCESS:
            return getInfoSuccess(state, action);
        case actionTypes.GET_INFO_FAIL:
            return getInfoFail(state, action);
        default:
            return state;
    }
};

export default reducer;