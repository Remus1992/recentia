import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../../../store/actions";

import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Dictionary.css'


class ClinicalDictionary extends Component {
    state = {
        expanded: false,
        elementClicked: null
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, ELEMENT_ID) {
        console.log('Clicked');
        this.props.onSubmitSearchStart();
        this.setState({
            expanded: true,
            elementClicked: ELEMENT_ID
        });

        event.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log('nextProps.searching: ' + nextProps.searching);
        // console.log('nextState.expanded: ' + nextState.expanded);
        // return nextProps.searching || nextState.expanded

        if (nextProps.searching && nextState.expanded) {
            return true
        }

        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(this.props.getTermItems);
        // console.log(prevProps.getTermItems);
        // if (!prevProps.searching && prevProps.getTermItems !== this.props.getTermItems) {
        let API_version = '/getClinicalDefinitionsByTerm';
        if (!prevProps.searching) {
            // console.log('getClinicalDefinitionsByTerm -> componentDidUpdate: ' + this.props.searchTerm);
            this.props.onGetInfo(this.props.searchTerm, API_version);
        }
    }

    componentDidMount() {
        let API_version = '/getClinicalDefinitionsByTerm';
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            // console.log('getClinicalDefinitionsByTerm -> componentDidMount: ' + this.props.searchTerm);
            this.props.onSubmitSearchStart();
            this.props.onGetInfo(this.props.searching, API_version);
        }
    }

    render() {
        let getTerm_results = <Spinner/>;

        // const clinicalDefinition = (definition) => {
        //     return <p>{definition}</p>
        // };

        if (!this.props.loading) {
            let isElementClicked = false;
            getTerm_results = this.props.getTermItems.map(item => {
                if (this.state.elementClicked === item.id) {
                    isElementClicked = true;
                } else {
                    isElementClicked = false;
                }
                return (
                    <span key={item.id}>
                        <p style={{textAlign: 'center'}}>Term: {item.Term}</p>
                        <button onClick={(e) => this.handleClick(e, item.id)}>Read Definition</button>

                        {/*<p style={{textAlign: 'center'}} key={item.id}>Clinical Definition: {item["Clinical Definition"]}</p>*/}
                        {/*<p>{isElementClicked ? clinicalDefinition(item["Clinical Definition"]) : null}</p>*/}

                        <p>{isElementClicked ? item["Clinical Definition"] : null}</p>
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
        getTermItems: state.searchReducer.search_results,
        searching: state.searchReducer.searchSubmit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH, API_VERSION) => dispatch(actions.getInfo(SEARCH, API_VERSION)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClinicalDictionary);