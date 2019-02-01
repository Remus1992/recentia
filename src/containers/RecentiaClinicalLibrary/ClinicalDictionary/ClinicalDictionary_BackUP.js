import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../../../store/actions";

import Spinner from '../../../components/UI/Spinner/Spinner';

import ClinicalDefinition from './ClinicalDefinition/ClinicalDefinition';

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
        if (nextProps.searching && nextState.expanded) {
            return true
        }
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let API_version = '/getClinicalDefinitionsByTerm';
        if (!prevProps.searching) {
            this.props.onGetInfo(this.props.searchTerm, API_version);
        }
    }

    componentDidMount() {
        let API_version = '/getClinicalDefinitionsByTerm';
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
            this.props.onGetInfo(this.props.searching, API_version);
        }
    }

    render() {
        let getTerm_results = <Spinner/>;

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