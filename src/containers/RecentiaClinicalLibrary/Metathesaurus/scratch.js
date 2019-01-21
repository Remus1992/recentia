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


// getClinicalDefinitionsByTerm
// Acute Pneumonia

export const sample_dictionary_call =
    [{
        "Term": "Pneumonia, Progressive Interstitial, of Sheep",
        "Lookup Language": "ENG",
        "Definition Language": "ENG",
        "Source Clinical Vocabulary": "MSH",
        "Clinical Definition": "Chronic respiratory disease caused by the VISNA-MAEDI VIRUS. It was formerly believed to be identical with jaagsiekte (PULMONARY ADENOMATOSIS, OVINE) but is now recognized as a separate entity."
    }, {
        "Term": "Pneumonia, Progressive Interstitial, of Sheep",
        "Lookup Language": "ENG",
        "Definition Language": "CZE",
        "Source Clinical Vocabulary": "MSHCZE",
        "Clinical Definition": "Chronick\u00e9 respira\u010dn\u00ed onemocn\u011bn\u00ed zp\u016fsoben\u00e9 virem visna-maedi. P\u016fvodn\u011b byla tato nemoc ztoto\u017e\u0148ov\u00e1na s plicn\u00ed adenomat\u00f3zou ovc\u00ed vyvol\u00e1vanou virem jaagsiekte, ale nyn\u00ed jsou ji\u017e ob\u011b choroby odli\u0161ov\u00e1ny."
    }, {
        "Term": "Pneumonia, Progressive Interstitial, of Sheep",
        "Lookup Language": "ENG",
        "Definition Language": "FRE",
        "Source Clinical Vocabulary": "MSHFRE",
        "Clinical Definition": "Maladie respiratoire chronique due au virus de Visna-Maedi. Pendant longtemps, on a pens\u00e9 que cette maladie \u00e9tait identique \u00e0 l'ad\u00e9nomatose pulmonaire des ovins, actuellement, on sait qu'il s'agit de deux entit\u00e9s s\u00e9par\u00e9es."
    }];

// getClinicalDefinitions
// 32306

export const sample_dictionary_call_by_concept =
    [{
        "Term": "Pneumonia, Progressive Interstitial, of Sheep",
        "Lookup Language": "ENG",
        "Definition Language": "ENG",
        "Source Clinical Vocabulary": "MSH",
        "Clinical Definition": "Chronic respiratory disease caused by the VISNA-MAEDI VIRUS. It was formerly believed to be identical with jaagsiekte (PULMONARY ADENOMATOSIS, OVINE) but is now recognized as a separate entity."
    }, {
        "Term": "Pneumonia, Progressive Interstitial, of Sheep",
        "Lookup Language": "ENG",
        "Definition Language": "CZE",
        "Source Clinical Vocabulary": "MSHCZE",
        "Clinical Definition": "Chronick\u00e9 respira\u010dn\u00ed onemocn\u011bn\u00ed zp\u016fsoben\u00e9 virem visna-maedi. P\u016fvodn\u011b byla tato nemoc ztoto\u017e\u0148ov\u00e1na s plicn\u00ed adenomat\u00f3zou ovc\u00ed vyvol\u00e1vanou virem jaagsiekte, ale nyn\u00ed jsou ji\u017e ob\u011b choroby odli\u0161ov\u00e1ny."
    }, {
        "Term": "Pneumonia, Progressive Interstitial, of Sheep",
        "Lookup Language": "ENG",
        "Definition Language": "FRE",
        "Source Clinical Vocabulary": "MSHFRE",
        "Clinical Definition": "Maladie respiratoire chronique due au virus de Visna-Maedi. Pendant longtemps, on a pens\u00e9 que cette maladie \u00e9tait identique \u00e0 l'ad\u00e9nomatose pulmonaire des ovins, actuellement, on sait qu'il s'agit de deux entit\u00e9s s\u00e9par\u00e9es."
    }]