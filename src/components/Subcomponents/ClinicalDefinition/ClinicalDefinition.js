import React, {Component} from 'react';

// import classes from './ClinicalDefinition.css';

// import Spinner from '../../UI/Spinner/Spinner';

class ClinicalDefinition extends Component {
    state = {
        expanded: false,
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log('Clicked');
        this.setState({
            expanded: true,
        });

        event.preventDefault();
    }

    render() {

        return (
            <React.Fragment>
                <p style={{textAlign: 'center'}}>Term: {this.props.itemTerm}</p>
                <button onClick={(e) => this.handleClick(e)}>Read Definition</button>
                <p>{this.state.expanded ? this.props.termDefinition : null}</p>
            </React.Fragment>
        )
    }
}

export default ClinicalDefinition;
