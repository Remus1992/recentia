import axios from '../axios-recentia'
import session_id, {
    clinic_license,
    clinical_variable,
    filter_by_value_sets,
    // input_vocabulary,
    ip_address,
    // output_vocabulary,
    physician_license,
    query_type,
    row_off_set_arg,
    rows_in_subset_arg,
    semantic_type,
    sort_order
} from "../secret";

export const buildQueryParams = (params) => {
    let queryString = '?';
    for (const key in params) {
        queryString += `${key}=${encodeURIComponent(params[key])}&`;
    }

    return queryString.slice(0, queryString.length - 1);
};

// console.log(buildQueryParams({hello: 'world', }))

export const getInfo = (search_item, apiEndPoint, inputLang, outputLang) => {
    let SEARCH_COUNTERPART = '';

    if (apiEndPoint === '/getTerms.php') {
        SEARCH_COUNTERPART = 'SearchTerm';
    } else if (apiEndPoint === '/getClinicalDefinitionsByTerm.php') {
        SEARCH_COUNTERPART = 'SearchTerm';
    } else if (apiEndPoint === '/getSynonyms.php') {
        SEARCH_COUNTERPART = 'Concept';
    } else if (apiEndPoint === '/getLanguages.php') {
        SEARCH_COUNTERPART = 'Concept';
    }

    let queryParams = buildQueryParams({
        SessionID: session_id,
        [SEARCH_COUNTERPART]: search_item,
        SearchTerm: search_item,
        QueryType: query_type,
        InputLanguage: inputLang,
        OutputLanguage: outputLang,
        SemanticType: semantic_type,
        ClinicalVariable: clinical_variable,
        FilterByValueSets: filter_by_value_sets,
        SortOrder: sort_order,
        RowOffsetArg: row_off_set_arg,
        RowsInSubsetArg: rows_in_subset_arg,
        IP_Address: ip_address,
        ClinicLicense: clinic_license,
        PhysicianLicense: physician_license
    });

    return axios.get(apiEndPoint + queryParams);
};
