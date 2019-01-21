import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../../../store/actions";

import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Dictionary.css'

class ClinicalDictionary extends Component {
    render() {
        let getTerm_results = <Spinner/>;
        if (!this.props.loading) {
            console.log(this.props.getTermItems);
            getTerm_results = this.props.getTermItems.map(item => {
                return (
                    <p style={{textAlign: 'center'}}>Preferred Term: {item.Term}</p>
                );
            });
        }

        return (
            <React.Fragment>
                <form>
                    <p>Redux SearchTerm = {this.props.searchTerm}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClinicalDictionary);