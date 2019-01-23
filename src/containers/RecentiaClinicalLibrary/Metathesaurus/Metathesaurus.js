import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Metathesaurus.css'


class Metathesaurus extends Component {
    // triggered by Parent
    // error message on console says that it's not good for Async code
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps: nextProps -> ' + nextProps + ' nextContext -> ' + nextContext)
    }

    // triggered by Internal Change
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: nextProps -> " + nextProps + " nextState -> " + nextState);
        return this.props.searching
    }

    // error message on console says that it's not good for Async code
    componentWillUpdate() {
        console.log("componentWillUpdate");
        // console.log(this.props.searching);
        // if (this.props.searching) {
        //     console.log("Got to first if");
        //     this.props.onGetInfo(this.props.searchTerm);
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate: prevProps -> " + prevProps + " prevState -> " + prevState)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // Redux and shouldComponentUpdate
    }

    render() {
        let getTerm_results = <Spinner/>;

        // if (this.props.searching) {
        //     console.log("Got to first if");
        //     this.props.onGetInfo(this.props.searchTerm);
        // }

        if (!this.props.loading) {
            console.log("Got to second if");
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

