import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

import {getInfo} from "../../../api";
import Spinner from '../../../components/UI/Spinner/Spinner';
import Synonym from '../../../components/Subcomponents/Synonym/Synonym';

const getPreferredTermList = (terms) => {
    if (terms) {
        return terms.map(item => (
            <Synonym
                key={item.Concept}
                termConcept={item.Concept}
                synonymCount={item.SynonymCount}
            >{item.PreferredTerm}</Synonym>
        ));
    }
};

class Metathesaurus extends Component {
    state = {
        preferredTermList: null
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    async updateComponent() {
        let API_version = '/getTerms';
        this.setState({
            loading: true,
        });
        const {data} = await getInfo(this.props.searchTerm, API_version);
        this.setState({
            preferredTermList: data,
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
        if (this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
            await this.updateComponent()
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>{(this.state.loading) ? <Spinner/> : getPreferredTermList(this.state.preferredTermList)}</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.search_term,
        searching: state.searchReducer.searchSubmit,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart()),
        onSubmitSearchSuccess: () => dispatch(actions.submitSearchSuccess())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Metathesaurus);

