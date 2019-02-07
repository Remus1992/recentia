import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../../../store/actions";

import {getInfo} from "../../../api";
import Spinner from '../../../components/UI/Spinner/Spinner';
import ClinicalDefinition from '../../../components/Subcomponents/ClinicalDefinition/ClinicalDefinition';

// import classes from './Dictionary.css'

const getClinicalDefinitionList = (terms) => {
    if (terms) {
        return terms.map(item => (
            <ClinicalDefinition
                key={item.id}
                itemTerm={item.Term}
                termDefinition={item["Clinical Definition"]}
            >{item.id}</ClinicalDefinition>
        ));
    }
};


class ClinicalDictionary extends Component {
    state = {
        clinicalDefinitionList: null
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    async updateComponent() {
        let API_version = '/getClinicalDefinitionsByTerm';
        this.setState({
            loading: true,
        });
        const {data} = await getInfo(this.props.searchTerm, API_version);
        this.setState({
            clinicalDefinitionList: data,
            loading: false,
        });
        this.props.onSubmitSearchSuccess();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.searching) {
            await this.updateComponent()
        }
    }

    async componentDidMount() {
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
            await this.updateComponent()
        }
    }

    render() {

        return (
            <React.Fragment>
                <div>{(this.state.loading) ? <Spinner/> : getClinicalDefinitionList(this.state.clinicalDefinitionList)}</div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.search_term,
        searching: state.searchReducer.searchSubmit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart()),
        onSubmitSearchSuccess: () => dispatch(actions.submitSearchSuccess())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClinicalDictionary);