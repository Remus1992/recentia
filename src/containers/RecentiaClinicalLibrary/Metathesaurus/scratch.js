import axios from "../../../axios-recentia";
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
} from "../../../secret";



export function handleInputChange(query) {
    this.setState({
        query: query
    }, () => {
        console.log(this.state.query);
        if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
                getInfo()
            }
        } else if (!this.state.query) {
            console.log('Unsuccessful')
        }
    })
}

export function getInfo() {
    // console.log(this.props);
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
