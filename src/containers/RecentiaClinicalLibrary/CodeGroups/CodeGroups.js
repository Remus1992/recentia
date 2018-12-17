// import React, {Component} from 'react';
//
// // import axios from '../../../axios-orders';
//
// // import classes from './CodeGroups.css'
//
// class CodeGroups extends Component {
//     state = {
//         definitions: null
//     };
//
//     render() {
//         return (
//             <React.Fragment>
//                 <div>CodeGroups</div>
//             </React.Fragment>
//         );
//     }
// }
//
// export default CodeGroups;


import React, {Component} from 'react';
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


// import axios from '../../../axios-orders';

// import classes from './Metathesaurus.css'

class Metathesaurus extends Component {
    state = {
        getTermItems: [],
        query: ''
    };

    getInfo  = () => {
        console.log(this.props);
        axios.get('/getTerms.php?SessionID=' + session_id
            // + '&SearchTerm=' + search_term
            + '&SearchTerm=' + this.state.query
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
    };

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    };


    render() {
        let items = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            items = this.state.getTermItems.map(item => {
                return (
                    <p style={{textAlign: 'center'}} key={item.Concept}>Preferred Term: {item.PreferredTerm}</p>
                );
            });
        }


        return (
            <React.Fragment>
                <form>
                    <input
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    <p>{this.state.query}</p>
                </form>
                <div>{items}</div>
            </React.Fragment>
        );
    }
}

export default Metathesaurus;