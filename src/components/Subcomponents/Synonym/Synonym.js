import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from "../../../store/actions";

// import classes from './Synonym.css';

// import Spinner from '../../UI/Spinner/Spinner';

class Synonym extends Component {
    state = {
        expanded: false,
        // synonymLocalList: null
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, CONCEPT, API_ENDPOINT) {
        this.props.onSubmitSearchStart();
        this.props.onGetInfo(CONCEPT, API_ENDPOINT);

        this.setState({
            expanded: true,
        });

        event.preventDefault();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.setState({
    //             synonymLocalList: this.props.getInfoSubItems
    //         }
    //     );
    // }

    render() {
        // let getTerm_synonymResults = <Spinner/>;
        let API_version = '/getSynonyms';

        const synonymList = (synonyms) => {
            return synonyms.map((synonym => <li key={synonym.TermID}>{synonym.PreferredTerm}</li>))
        };



        return (
            <React.Fragment>
                <p style={{textAlign: 'center'}}>Term: {this.props.children}</p>
                <button onClick={(e) => this.handleClick(e, this.props.termConcept, API_version)}>List
                    Synonyms: {this.props.synonymCount}</button>
                <ul>{this.state.expanded ? synonymList(this.props.getInfoSubItems) : null}</ul>
                {/*<p>-------</p>*/}
                {/*<ul>{this.state.expanded ? synonymList(this.state.synonymLocalList) : null}</ul>*/}
                {/*<ul>{this.state.expanded ? <li>Clicked</li> : <li>Not Clicked</li>}</ul>*/}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        getInfoSubItems: state.searchReducer.search_sub_results,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH, API_VERSION) => dispatch(actions.getInfo(SEARCH, API_VERSION)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Synonym);

