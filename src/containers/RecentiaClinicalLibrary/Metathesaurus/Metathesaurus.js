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
        expanded: false,
        elementClicked: null
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        // this.expandedText = this.expandedText(this);

    }

    handleClick(event, CONCEPT, API_ENDPOINT, ELEMENT_ID) {
        this.props.onSubmitSearchStart();
        this.props.onGetInfo(CONCEPT, API_ENDPOINT);
        console.log('Expanded before: ' + this.state.expanded);
        console.log('elementClicked before: ' + this.state.elementClicked);

        this.setState({
            expanded: true,
            elementClicked: ELEMENT_ID
        });

        // this.expandedText();

        console.log('Expanded after: ' + this.state.expanded);
        console.log('elementClicked after: ' + this.state.elementClicked);
        event.preventDefault();
    }

    // expandedText() {
    //     this.setState({
    //         expanded: true
    //     })
    // }
    //
    // getMoreTextDiv() {
    //     if (this.state.expanded) {
    //         this.props.getInfoSubItems.map(item => {
    //             return (
    //                 <span>
    //                     <p key={item.TermID}>{item.PreferredTerm}</p>
    //                 </span>
    //             )
    //         });
    //
    //         return <div>Expanded</div>
    //     } else {
    //         return null;
    //     }
    // }

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
        let expandedDiv = null;
        let API_version = '/getSynonyms';

        // let expandedDiv = this.getMoreTextDiv();

        console.log('Expanded in Render: ' + this.state.expanded);
        console.log('elementClicked in Render: ' + this.state.elementClicked);
        if (this.state.expanded) {

            expandedDiv = this.props.getInfoSubItems.map(item => {
                return (
                    <p key={item.TermID}>{item.PreferredTerm} TermID: {item.TermID}</p>
                )
            });
            console.log(expandedDiv)
        }

        if (!this.props.loading) {

            let isElementClicked = false;

            getTerm_results = this.props.getInfoItems.map(item => {
                console.log('elementClicked in Render if statement: ' + this.state.elementClicked);
                console.log('item.id in Render if statement: ' + item.id);
                if (this.state.elementClicked === item.id) {
                    isElementClicked = true;
                } else {
                    isElementClicked = false;
                }
                return (
                    <span key={item.id}>
                        <p style={{textAlign: 'center'}}>Preferred Term: {item.PreferredTerm} Concept: {item.Concept}</p>
                        <p>{item.id}</p>
                        <button
                            onClick={(e) => this.handleClick(e, item.Concept, API_version, item.id)}>Synonym Count: {item.SynonymCount}</button>
                        {/*<div id={item.id}>{expandedDiv}</div>*/}

                        {/*<div>{isElementClicked ? {expandedDiv} : 'not clicked'}</div>*/}

                    </span>
                );
            });
        }


        return (
            <React.Fragment>
                <div>{getTerm_results}</div>
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

