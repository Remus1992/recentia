import React, {Component} from 'react';
import * as actions from "../../../../store/actions";
import {connect} from "react-redux";
import Spinner from "../Metathesaurus";
import {NavLink, Route, Switch} from "react-router-dom";
import Synonyms from "../Synonyms/Synonyms";
import classes
    from "../../../../components/LibraryToolbar/LibraryNavigationItems/LibraryNavigationItem/LibraryNavigationItem.css";

// import classes from './CodingSystems.css'

class PreferredTerms extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, CONCEPT, API_ENDPOINT) {
        this.props.onSubmitSearchStart();
        this.props.onGetInfo(CONCEPT, API_ENDPOINT);
        event.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log(nextProps.getInfoItems !== this.props.getInfoItems);
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(this.props.getInfoItems);
        // console.log(prevProps.getInfoItems);
        // console.log(prevProps.getInfoItems !== this.props.getInfoItems);
        if (!prevProps.searching) {
            // console.log('getTerm -> componentDidUpdate: ' + this.props.searchTerm);
            this.props.onGetInfo(this.props.searchTerm, '/getTerms');
        }
    }

    componentDidMount() {
        if (!this.props.searching && this.props.searchTerm.length !== 0) {
            // console.log('getTerm -> componentDidMount: ' + this.props.searchTerm);
            this.props.onSubmitSearchStart();
            this.props.onGetInfo(this.props.searching, '/getTerms');
            this.history.pushState(this.props.getInfoItems, '/synonyms')
        }
    }

    render() {
        let getTerm_results = <Spinner/>;

        if (!this.props.loading) {
            // console.log("Render: 2nd if statement executed");
            getTerm_results = this.props.getInfoItems.map(item => {
                return (
                    <span>
                        <p style={{textAlign: 'center'}} key={item.Concept}>Preferred Term: {item.PreferredTerm}</p>
                        {/*<button onClick={(e) => this.handleClick(e, item.Concept, '/getSynonyms')}>Synonym Count: {item.SynonymCount}</button>*/}
                        <NavLink to='/synonyms'>Synonym Count: {item.SynonymCount}</NavLink>
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
        searching: state.searchReducer.searchSubmit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH, API_VERSION) => dispatch(actions.getInfo(SEARCH, API_VERSION)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferredTerms);
