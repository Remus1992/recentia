import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Metathesaurus.css'


class Metathesaurus extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps.searching);
        if (!prevProps.searching) {
            console.log("componentDidMount: if statement");
            this.props.onGetInfo(this.props.searchTerm);
        }
    }

    render() {
        // if (this.props.searching) {
        //     console.log("Render: 1st if statement");
        //     this.props.onGetInfo(this.props.searchTerm);
        // }

        let getTerm_results = <Spinner/>;

        if (!this.props.loading) {
            console.log("Render: 2nd if statement executed");
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

