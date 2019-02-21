import React, {Component} from 'react';

import {getInfo} from "../../../api";
// import * as actions from "../../../store/actions";
import {connect} from "react-redux";

// import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Synonym.css';

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
        const synonymList = await getInfo(CONCEPT, API_ENDPOINT, this.props.inputLanguage, this.props.outputLanguage);

        this.setState(function(prevState) {
			return {
			    expanded: !prevState.expanded,
                synonymList: synonymList
			};
		});

    }

    render() {
        let API_version = '/getSynonyms.php';
        const {classes} = this.props;

        return (
            <React.Fragment>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} onClick={(e) => this.handleClick(e, this.props.termConcept, API_version)} >
                        <Typography className={classes.heading}>Term: {this.props.children}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {this.state.expanded ? synonymList(this.state.synonymList) : null}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        )
    }
}

// export default Synonym;

const mapStateToProps = state => {
    return {
        inputLanguage: state.searchReducer.input_language,
        outputLanguage: state.searchReducer.output_language,
    }
};

// export default connect(mapStateToProps, null)(Synonym);
export default connect(mapStateToProps, null)(withStyles(styles)(Synonym));
