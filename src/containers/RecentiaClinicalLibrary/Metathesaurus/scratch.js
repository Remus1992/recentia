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

class Metathesaurus extends Component {
    // triggered by Parent
    // error message on console says that it's not good for Async code
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('componentWillReceiveProps: nextProps -> ' + nextProps + ' nextContext -> ' + nextContext)
    // }

    // triggered by Internal Change
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: nextProps -> " + nextProps.valueOf() + " nextState -> " + nextState);
        console.log("shouldComponentUpdate1: this.props.searching-> " + this.props.searching);
        console.log("shouldComponentUpdate2: nextProps.searching-> " + nextProps.searching);

        return nextProps.searching
    }

    // error message on console says that it's not good for Async code
    // componentWillUpdate() {
    //     console.log("componentWillUpdate");
    //     console.log(this.props.searching);
    // if (this.props.searching) {
    //     console.log("Got to first if");
    //     this.props.onGetInfo(this.props.searchTerm);
    // }
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("componentDidUpdate: prevProps -> " + prevProps.searching + " prevState -> " + prevState)
    // }

    // componentWillMount() {
    //     console.log("componentWillMount");
    //     console.log("componentWillMount: searching -> " + this.props.searching);
    //     if (this.props.searching) {
    //         console.log("componentWillMount: if statement");
    //         this.props.onGetInfo(this.props.searchTerm);
    //     }
    // }

    componentDidMount() {
        console.log("componentDidMount: this.props -> " + this.props);
        console.log("componentDidMount: searching -> " + this.props.searching);

        if (this.props.searching) {
            console.log("componentDidMount: if statement");
            this.props.onGetInfo(this.props.searchTerm);
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     // Redux and shouldComponentUpdate
    // }

    render() {
        let getTerm_results = <Spinner/>;

        // if (this.props.searching) {
        //     console.log("Render: 1st if statement");
        //     this.props.onGetInfo(this.props.searchTerm);
        // }

        if (!this.props.loading) {
            console.log("Render: 2nd if statement");
            getTerm_results = this.props.getTermItems.map(item => {
                return (
                    <p style={{textAlign: 'center'}} key={item.Concept}>Preferred Term: {item.PreferredTerm}</p>
                );
            });
        }

        return (
            <React.Fragment>
                <div style={{textAlign: 'center'}}>Search Term is: {this.props.searchTerm}</div>
                <div>{getTerm_results}</div>
            </React.Fragment>
        );
    }
}


getTerms__sample_api =
    [{
        "Concept": 278986,
        "IsMappedToCQM": 0,
        "SynonymCount": 18,
        "Acronym": null,
        "Category1": null,
        "Category2": null,
        "Category3": null,
        "Category4": null,
        "PreferredTerm": "Stage 0 Non-Small Cell Lung Cancer"
    }, {
        "Concept": 278504,
        "IsMappedToCQM": 0,
        "SynonymCount": 19,
        "Acronym": null,
        "Category1": null,
        "Category2": null,
        "Category3": null,
        "Category4": null,
        "PreferredTerm": "Stage I Non-Small Cell Lung Cancer"
    }, {
        "Concept": 278505,
        "IsMappedToCQM": 0,
        "SynonymCount": 20,
        "Acronym": null,
        "Category1": null,
        "Category2": null,
        "Category3": null,
        "Category4": null,
        "PreferredTerm": "Stage II Non-Small Cell Lung Cancer"
    }, {
        "Concept": 278506,
        "IsMappedToCQM": 0,
        "SynonymCount": 20,
        "Acronym": null,
        "Category1": null,
        "Category2": null,
        "Category3": null,
        "Category4": null,
        "PreferredTerm": "Stage III Non-Small Cell Lung Cancer"
    }, {
        "Concept": 278983,
        "IsMappedToCQM": 0,
        "SynonymCount": 22,
        "Acronym": null,
        "Category1": null,
        "Category2": null,
        "Category3": null,
        "Category4": null,
        "PreferredTerm": "Stage IIIA Non-Small Cell Lung Cancer"
    }, {
        "Concept": 278984,
        "IsMappedToCQM": 0,
        "SynonymCount": 22,
        "Acronym": null,
        "Category1": null,
        "Category2": null,
        "Category3": null,
        "Category4": null,
        "PreferredTerm": "Stage IIIB Non-Small Cell Lung Cancer"
    }, {
        "Concept": 278987,
        "IsMappedToCQM": 0,
        "SynonymCount": 33,
        "Acronym": null,
        "Category1": null,
        "Category2": null,
        "Category3": null,
        "Category4": null,
        "PreferredTerm": "Stage IV Non-Small Cell Lung Cancer"
    }];

getSynonym_API_CALL =
    [
        {"TermID": 1651967, "PreferredTerm": "LUNG CANCER NON SMALL CELL METASTATIC"},
        {"TermID": 2605187, "PreferredTerm": "Lung cancer non-small cell stage IV"},
        {"TermID": 769845, "PreferredTerm": "lung cancer, non-oat cell, metastatic"},
        {"TermID": 769853, "PreferredTerm": "lung cancer, non-oat cell, stage IV"},
        {"TermID": 769857, "PreferredTerm": "lung cancer, nonsmall cell, metastatic"},
        {"TermID": 769865, "PreferredTerm": "lung cancer, nonsmall cell, stage IV"},
        {"TermID": 4159832, "PreferredTerm": "Metastatic Non-Oat Cell Carcinoma of Lung"},
        {"TermID": 4159833, "PreferredTerm": "Metastatic Non-Oat Cell Carcinoma of the Lung"},
        {"TermID": 4159834, "PreferredTerm": "Metastatic Non-Oat Cell Lung Carcinoma"},
        {"TermID": 4159835, "PreferredTerm": "Metastatic Non-Small Cell Carcinoma of Lung"},
        {"TermID": 4159836, "PreferredTerm": "Metastatic Non-Small Cell Carcinoma of the Lung"},
        {"TermID": 770480, "PreferredTerm": "metastatic nonsmall cell lung cancer"},
        {"TermID": 4159837, "PreferredTerm": "Metastatic Non-Small Cell Lung Carcinoma"},
        {"TermID": 771310, "PreferredTerm": "non-oat cell lung cancer, metastatic"},
        {"TermID": 771319, "PreferredTerm": "non-oat cell lung cancer, stage IV"},
        {"TermID": 2939751, "PreferredTerm": "Non-small cell lung cancer metastatic"},
        {"TermID": 2605406, "PreferredTerm": "Non-small cell lung cancer stage IV"},
        {"TermID": 771344, "PreferredTerm": "nonsmall cell lung cancer, metastatic"},
        {"TermID": 771353, "PreferredTerm": "nonsmall cell lung cancer, stage IV"},
        {"TermID": 771328, "PreferredTerm": "non-small cell lung cancer, stage IV"}
    ];