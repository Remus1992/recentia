import * as actionTypes from './actionTypes';
import axios from "../../axios-recentia";
import session_id, {
    clinic_license,
    clinical_variable, filter_by_value_sets,
    input_language,
    input_vocabulary, ip_address,
    output_language,
    output_vocabulary, physician_license,
    query_type, row_off_set_arg, rows_in_subset_arg, semantic_type, sort_order
} from "../../secret";

export const getInfoStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
};

export const getInfo = () => {
    return dispatch => {
        dispatch(getInfoStart());
        axios.get('/getTerms.php?SessionID=' + session_id
            // + '&SearchTerm=' + search_term
            // + '&SearchTerm=' + this.state.query
            + '&SearchTerm=' + this.props.searchTerm
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
                const getTermItems = response.data;
                this.setState({getTermItems: getTermItems});
                console.log(response);

                let i = getTermItems.length;
                console.log(i);
                for (let index = 0; index < getTermItems.length; index++) {
                    console.log("Concept is: " + getTermItems[index]["Concept"])
                }
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }
};


export const getSearchTerm = (term) => {
    return {
        type: actionTypes.GET_SEARCH_TERM,
        searchTerm: term
    }
};