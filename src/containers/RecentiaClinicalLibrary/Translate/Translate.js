import React, {Component} from 'react';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

// import axios from '../../../axios-orders';

// import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Languages.css'

class Translate extends Component {
    state = {
        supportedLanguages: null
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let API_version = '/getLanguages';
        if (!prevProps.searching) {
            console.log('API_VERSION: ' + API_version);
            this.props.onGetInfo(this.props.searchTerm, API_version);
        }
    }

    componentDidMount() {
        let API_version = '/getLanguages';
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
            this.props.onGetInfo(this.props.searching, API_version);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>Translate</div>
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
        searching: state.searchReducer.searchSubmit,
        subComponent: state.searchReducer.subcomponent
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH, API_VERSION) => dispatch(actions.getInfo(SEARCH, API_VERSION)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Translate);

