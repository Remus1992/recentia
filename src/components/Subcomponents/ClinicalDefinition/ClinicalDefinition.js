import React, {Component} from 'react';

// import classesSecondary from './ClinicalDefinition.css';


import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

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

        event.preventDefault();
    }



    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                {/*<button*/}
                    {/*className={this.state.expanded ? [classesSecondary.accordion, classesSecondary.active].join(' ') : classesSecondary.accordion}*/}
                    {/*onClick={(e) => this.handleClick(e)}>{this.props.itemTerm}</button>*/}
                {/*<div className={classesSecondary.panel} style={{maxHeight: this.state.expanded ? '150px' : null}}>*/}
                    {/*<p>{this.state.expanded ? this.props.termDefinition : null}</p>*/}
                {/*</div>*/}
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} >
                        <Typography className={classes.heading}>{this.props.itemTerm}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {this.props.termDefinition}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ClinicalDefinition);
