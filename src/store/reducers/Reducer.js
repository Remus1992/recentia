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
import axios from "../../axios-recentia";


const initialState = {
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
    error: false,
    loading: false
};

const getSearchTermStart = (state, action) => {
    return updateObject(state, {loading: false});
};

const getSearchTerm = (state, action) => {
    const updatedState = {
        search_term: action.searchTerm,
        loading: false
    };

    return updateObject(state, updatedState);
};

const getSearchTermFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_SEARCH_TERM_START:
            return getSearchTermStart(state, action);
        case actionTypes.GET_SEARCH_TERM:
            return getSearchTerm(state, action);
        case actionTypes.GET_SEARCH_TERM_FAIL:
            return getSearchTermFail(state, action);
        default:
            return state;
    }
};

export default reducer;