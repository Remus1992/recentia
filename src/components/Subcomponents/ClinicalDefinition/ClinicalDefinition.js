import React, {Component} from 'react';

import classes from './ClinicalDefinition.css';

// import Spinner from '../../UI/Spinner/Spinner';

class ClinicalDefinition extends Component {
    state = {
        expanded: false,
        isToggleOn: true
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState(function (prevState) {
            return {
                expanded: !prevState.expanded
            };
        });

        // let panel = this.nextElementSibling;
        // if (panel.style.maxHeight) {
        //     panel.style.maxHeight = null;
        // } else {
        //     panel.style.maxHeight = panel.scrollHeight + "px";
        // }

        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <button
                    className={this.state.expanded ? [classes.accordion, classes.active].join(' ') : classes.accordion}
                    onClick={(e) => this.handleClick(e)}>{this.props.itemTerm}</button>
                <div className={classes.panel} style={{maxHeight: this.state.expanded ? '150px': null}}>
                    <p>{this.state.expanded ? this.props.termDefinition : null }</p>
                </div>
            </React.Fragment>
        )
    }
}

export default ClinicalDefinition;
