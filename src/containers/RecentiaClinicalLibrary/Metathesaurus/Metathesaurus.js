import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Metathesaurus.css'


class Metathesaurus extends Component {
    render() {
        let getTerm_results = <Spinner/>;
        if (this.props.searching) {
            this.props.onGetInfo(this.props.searchTerm);
        }

        if (!this.props.loading) {
            getTerm_results = this.props.getTermItems.map(item => {
                return (
                    <p style={{textAlign: 'center'}} key={item.Concept}>Preferred Term: {item.PreferredTerm}</p>
                );
            });
        }

        return (
            <React.Fragment>
                <div>{this.props.searchTerm}</div>
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
        onGetInfo: (SEARCH) => dispatch(actions.getInfo(SEARCH))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Metathesaurus);

