import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Synonym from '../../../components/Subcomponents/Synonyms/Synonym/Synonym';

// import {Route, Switch} from "react-router-dom";

// import classes from './Metathesaurus.css'

// Sub-Containers
// import Synonyms from './Synonyms/Synonyms';
// import PreferredTerms from './PreferredTerms/PreferredTerms';

class Metathesaurus extends Component {
    state = {
        expanded: false,
        elementClicked: null
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, CONCEPT, API_ENDPOINT, ELEMENT_ID) {
        this.props.onSubmitSearchStart();
        this.props.onGetInfo(CONCEPT, API_ENDPOINT);

        this.setState({
            expanded: true,
            elementClicked: ELEMENT_ID
        });

        event.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let API_version = '/getTerms';
        if (!prevProps.searching) {
            console.log('API_VERSION: ' + API_version);
            this.props.onGetInfo(this.props.searchTerm, API_version);
        }
    }

    componentDidMount() {
        let API_version = '/getTerms';
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
            this.props.onGetInfo(this.props.searching, API_version);
        }
    }

    render() {
        let getTerm_results = <Spinner/>;
        let API_version = '/getSynonyms';

        const synonymList = (synonyms) => {
            return synonyms.map((synonym => <Synonym key={synonym.TermID}>{synonym.TermID}</Synonym>))
        };

        if (!this.props.loading) {

            let isElementClicked = false;

            getTerm_results = this.props.getInfoItems.map(item => {
                if (this.state.elementClicked === item.id) {
                    isElementClicked = true;
                } else {
                    isElementClicked = false;
                }
                return (
                    <span key={item.id}>
                        <p style={{textAlign: 'center'}}>Preferred Term: {item.PreferredTerm} Concept: {item.Concept}</p>
                        <button
                            onClick={(e) => this.handleClick(e, item.Concept, API_version, item.id)}>Synonym Count: {item.SynonymCount}</button>

                        <ul>{isElementClicked ? synonymList(this.props.getInfoSubItems) : null}</ul>

                    </span>
                );
            });
        }

        return (
            <React.Fragment>
                <div>{getTerm_results}</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.search_term,
        loading: state.searchReducer.loading,
        getInfoItems: state.searchReducer.search_results,
        getInfoSubItems: state.searchReducer.search_sub_results,
        searching: state.searchReducer.searchSubmit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH, API_VERSION) => dispatch(actions.getInfo(SEARCH, API_VERSION)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Metathesaurus);

