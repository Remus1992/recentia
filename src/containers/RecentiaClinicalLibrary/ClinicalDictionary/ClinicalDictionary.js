import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../../../store/actions";

import Spinner from '../../../components/UI/Spinner/Spinner';

import ClinicalDefinition from '../../../components/Subcomponents/ClinicalDefinition/ClinicalDefinition';

// import classes from './Dictionary.css'


class ClinicalDictionary extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let API_version = '/getClinicalDefinitionsByTerm';
        if (!prevProps.searching) {
            this.props.onGetInfo(this.props.searchTerm, API_version);
        }
    }

    componentDidMount() {
        let API_version = '/getClinicalDefinitionsByTerm';
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
            this.props.onGetInfo(this.props.searching, API_version);
        }
    }

    render() {
        let getTerm_results = <Spinner/>;

        if (!this.props.loading) {
            getTerm_results = this.props.getTermItems.map(item => {
                return (
                    <ClinicalDefinition
                        key={item.id}
                        itemTerm={item.Term}
                        termDefinition={item["Clinical Definition"]}
                    >{item.id}</ClinicalDefinition>
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
        getTermItems: state.searchReducer.search_results,
        searching: state.searchReducer.searchSubmit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH, API_VERSION) => dispatch(actions.getInfo(SEARCH, API_VERSION)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClinicalDictionary);