import * as actionTypes from './actionTypes';
import axios from "../../axios-recentia";

import session_id, {
    clinic_license,
    clinical_variable,
    filter_by_value_sets,
    input_language,
    input_vocabulary,
    ip_address,
    output_language,
    output_vocabulary,
    physician_license,
    query_type,
    row_off_set_arg,
    rows_in_subset_arg,
    semantic_type,
    sort_order
} from "../../secret";


export const getInfoStart = () => {
    return {
        type: actionTypes.GET_INFO_START
    }
};


export const getInfoSuccess = (search_results, is_sub_component_or_not) => {
    return {
            type: actionTypes.GET_INFO_SUCCESS,
            search_results: search_results,
            is_sub_component_or_not: is_sub_component_or_not
        }

};

export const getInfoFail = (error) => {
    return {
        type: actionTypes.GET_INFO_FAIL,
        error: error
    }
};

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

export const getInfo = (SEARCH_ITEM, API_ENDPOINT) => {
    console.log(API_ENDPOINT + ' ' + SEARCH_ITEM);

    let SEARCH_COUNTERPART = '';
    let IS_SUB_COMPONENT_OR_NOT = false;

    if (API_ENDPOINT === '/getTerms') {
        SEARCH_COUNTERPART = '&SearchTerm=';
    } else if (API_ENDPOINT === '/getClinicalDefinitionsByTerm') {
        SEARCH_COUNTERPART = '&SearchTerm=';
    } else if (API_ENDPOINT === '/getSynonyms') {
        SEARCH_COUNTERPART = '&Concept=';
        IS_SUB_COMPONENT_OR_NOT = true;
        // console.log(IS_SUB_COMPONENT_OR_NOT);
    }

    return dispatch => {
        dispatch(getInfoStart());
        // console.log(IS_SUB_COMPONENT_OR_NOT);
        axios.get(API_ENDPOINT + '.php?SessionID=' + session_id
            + SEARCH_COUNTERPART + SEARCH_ITEM
            + '&SearchTerm=' + SEARCH_ITEM
            + '&QueryType=' + query_type
            + '&InputLanguage=' + input_language
            + '&OutputLanguage=' + output_language
            + '&InputVocabulary=' + input_vocabulary
            + '&OutputVocabulary=' + output_vocabulary
            + '&SemanticType=' + semantic_type
            + '&ClinicalVariable=' + clinical_variable
            + '&FilterByValueSets=' + filter_by_value_sets
            + '&SortOrder=' + sort_order
            + '&RowOffsetArg=' + row_off_set_arg
            + '&RowsInSubsetArg=' + rows_in_subset_arg
            + '&IP_Address=' + ip_address
            + '&ClinicLicense=' + clinic_license
            + '&PhysicianLicense=' + physician_license
        )
            .then(response => {
                // const getTermItems = response.data;

                const getInfoItems = [];
                for (let key in response.data) {
                    getInfoItems.push({
                        ...response.data[key],
                        id: key
                    });
                }
                // console.log(getInfoItems);

                // if (IS_SUB_COMPONENT_OR_NOT) {
                //     dispatch(getInfoSuccess(getInfoItems));
                //     dispatch(submitSearchSuccess());
                // } else {
                //     dispatch(getInfoSuccess(getInfoItems));
                //     dispatch(submitSearchSuccess());
                // }

                dispatch(getInfoSuccess(getInfoItems, IS_SUB_COMPONENT_OR_NOT));
                dispatch(submitSearchSuccess());
            })
            .catch(error => {
                console.log(error);
                dispatch(getInfoFail(error))
            });
    }
};

export const getSearchTerm = (term) => {
    return {
        type: actionTypes.GET_SEARCH_TERM,
        searchTerm: term
    }
};

