import React, {Component} from 'react';

import {getInfo} from "../../../api";

// import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Synonym.css';

// import Spinner from '../../UI/Spinner/Spinner';

const synonymList = ({data}) => {
    return data.map((synonym => <li key={synonym.TermID}>{synonym.PreferredTerm}</li>))
};

class Synonym extends Component {
    state = {
        expanded: false,
        synonymList: null
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(event, CONCEPT, API_ENDPOINT) {
        const synonymList = await getInfo(CONCEPT, API_ENDPOINT);

        this.setState({
            expanded: true,
            synonymList: synonymList
        });
    }

    render() {
        let API_version = '/getSynonyms';

        return (
            <React.Fragment>
                <p style={{textAlign: 'center'}}>Term: {this.props.children}</p>
                <button onClick={(e) => this.handleClick(e, this.props.termConcept, API_version)}>List
                    Synonyms: {this.props.synonymCount}</button>
                <ul>{this.state.expanded ? synonymList(this.state.synonymList) : null}</ul>
            </React.Fragment>
        )
    }
}

export default Synonym;

