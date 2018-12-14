import React, {Component} from 'react';
import axios from "../../../axios-recentia";
import session_id, {
    search_term,
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


// import axios from '../../../axios-orders';

// import classes from './Metathesaurus.css'

class Metathesaurus extends Component {
    state = {
        definitions: null
    };

        componentDidMount () {
        console.log( this.props );
        axios.get( '/getTerms.php?SessionID=' + session_id
            + '&SearchTerm=' + search_term
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
            .then( response => {
                const definitions = response.data;
                this.setState( { definitions: definitions } );
                console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    render() {
        return (
            <React.Fragment>
                <div>Metathesaurus</div>
            </React.Fragment>
        );
    }
}

export default Metathesaurus;