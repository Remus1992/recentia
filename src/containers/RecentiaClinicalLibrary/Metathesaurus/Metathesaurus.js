import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Metathesaurus.css'


class Metathesaurus extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // alert('A term was submitted: ' + this.props.searchTerm);
        console.log(this.props.searchTerm);
        this.props.onGetInfo(this.props.searchTerm);
        event.preventDefault();
    }

    render() {
        let getTerm_results = <Spinner/>;
        // if (!this.props.searching) {
        //     this.props.onGetInfo(this.props.searchTerm)
        // }

        // if (!this.props.loading) {
        if (!this.props.loading && this.props.searching) {
        // if (!this.props.loading) {
            this.props.onGetInfo(this.props.searchTerm);
            console.log(this.props.getTermItems);
            getTerm_results = this.props.getTermItems.map(item => {
                return (
                    <p style={{textAlign: 'center'}} key={item.Concept}>Preferred Term: {item.PreferredTerm}</p>
                );
            });
        }

        // if (!this.props.searching)

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <p>Redux SearchTerm = {this.props.searchTerm}</p>
                    <input type="text" onChange={(e) => this.props.onGetInfo(e.target.value)}
                           value={this.props.searchTerm}/>
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

