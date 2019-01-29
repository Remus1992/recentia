import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

import Spinner from '../../../components/UI/Spinner/Spinner';
// import {Route, Switch} from "react-router-dom";

// import classes from './Metathesaurus.css'

// Sub-Containers
// import Synonyms from './Synonyms/Synonyms';
// import PreferredTerms from './PreferredTerms/PreferredTerms';

class Metathesaurus extends Component {
    state = {
        expanded: false
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        // this.expandedText = this.expandedText(this);

    }

    handleClick(event, CONCEPT, API_ENDPOINT) {
        this.props.onSubmitSearchStart();
        this.props.onGetInfo(CONCEPT, API_ENDPOINT);
        console.log('Expanded before: ' + this.state.expanded);

        this.setState({
            expanded: true
        });

        console.log('Expanded after: ' + this.state.expanded);
        event.preventDefault();
    }

    expandedText() {
        this.setState({
            expanded: true
        })
    }

    getMoreTextDiv() {
        if (this.state.expanded) {
            this.props.getInfoSubItems.map(item => {
                return (
                    <span>
                        <p key={item.TermID}>{item.PreferredTerm}</p>
                    </span>
                )
            })

        } else {
            return null;
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log(nextProps.getInfoItems !== this.props.getInfoItems);
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let API_version = '/getTerms';
        if (!prevProps.searching) {
            this.props.onGetInfo(this.props.searchTerm, API_version);
        }
    }

    componentDidMount() {
        let API_version = '/getTerms';
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
            this.props.onGetInfo(this.props.searching, API_version);
        }
    }

    render() {
        let getTerm_results = <Spinner/>;
        let API_version = '/getSynonyms';

        let expandedDiv = this.getMoreTextDiv();

        if (!this.props.loading) {
            getTerm_results = this.props.getInfoItems.map(item => {
                return (
                    <span>
                        <p style={{textAlign: 'center'}} key={item.Concept}>Preferred Term: {item.PreferredTerm}</p>
                        <button
                            onClick={(e) => this.handleClick(e, item.Concept, API_version)}>Synonym Count: {item.SynonymCount}</button>
                        <div>{expandedDiv}</div>
                    </span>
                );
            });
        }

        return (
            <React.Fragment>
                {/*<div>{expandedDiv}</div>*/}
                <div>{getTerm_results}</div>
                {/*<Switch>*/}
                {/*<Route path={this.props.match.url + "/preferred_terms"} component={PreferredTerms}/>*/}
                {/*<Route path={this.props.match.url + "/synonyms"} component={Synonyms}/>*/}
                {/*</Switch>*/}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.search_term,
        loading: state.searchReducer.loading,
        getInfoItems: state.searchReducer.search_results,
        getInfoSubItems: state.searchReducer.search_sub_results,
        searching: state.searchReducer.searchSubmit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH, API_VERSION) => dispatch(actions.getInfo(SEARCH, API_VERSION)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Metathesaurus);

