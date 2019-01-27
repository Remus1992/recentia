import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../../../store/actions";

import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Dictionary.css'


class ClinicalDictionary extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(this.props.getTermItems);
        // console.log(prevProps.getTermItems);
        // if (!prevProps.searching && prevProps.getTermItems !== this.props.getTermItems) {
        if (!prevProps.searching) {
            // console.log('getClinicalDefinitionsByTerm -> componentDidUpdate: ' + this.props.searchTerm);
            this.props.onGetInfo(this.props.searchTerm, '/getClinicalDefinitionsByTerm');
        }
    }

    componentDidMount() {
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            // console.log('getClinicalDefinitionsByTerm -> componentDidMount: ' + this.props.searchTerm);
            this.props.onSubmitSearchStart();
            this.props.onGetInfo(this.props.searching, '/getClinicalDefinitionsByTerm');
        }
    }

    render() {
        let getTerm_results = <Spinner/>;

        if (!this.props.loading) {
            // console.log("Render: 2nd if statement executed");
            getTerm_results = this.props.getTermItems.map(item => {
                return (
                    <p style={{textAlign: 'center'}} key={item.id}>Preferred Term: {item["Clinical Definition"]}</p>
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