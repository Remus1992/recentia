import React, {Component} from 'react';
import axios from "../../../axios-recentia";
import {connect} from 'react-redux';

import Spinner from '../../../components/UI/Spinner/Spinner';

import * as actions from '../../../store/actions/index';

// import classes from './Metathesaurus.css'


class Metathesaurus extends Component {
    render() {
        let getTerm_results = <Spinner/>;
        if (!this.props.loading) {
            getTerm_results = this.props.getTermItems.map(item => {
                return (
                    <p style={{textAlign: 'center'}} key={item.Concept}>Preferred Term: {item.PreferredTerm}</p>
                );
            });
        }

        return (
            <React.Fragment>
                <form>
                    <p>Redux SearchTerm = {this.props.searchTerm}</p>
                    <input type="text" onChange={(e) => this.props.onGetInfo(e.target.value)} value={this.props.searchTerm}/>
                </form>

                <div>{getTerm_results}</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.search_term,
        loading: state.searchReducer.loading,
        getTermItems: state.searchReducer.search_results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH) => dispatch(actions.getInfo(SEARCH))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Metathesaurus);