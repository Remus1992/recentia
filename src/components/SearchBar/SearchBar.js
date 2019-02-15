import React, {Component} from 'react';
import classesSecondary from "./SearchBar.css";
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import * as actions from '../../store/actions/index';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmitSearchStart();
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classesSecondary.recentia_search_wrapper}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => this.props.onSearchChange(e.target.value)}
                        className={classesSecondary.search_bar}/>
                    {/*<Input*/}
                        {/*placeholder="Search..."*/}
                        {/*className={classes.input}*/}
                        {/*onChange={(e) => this.props.onSearchChange(e.target.value)}*/}
                    {/*/>*/}
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (search) => dispatch(actions.getSearchTerm(search)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

// export default connect(null, mapDispatchToProps)(SearchBar);
export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBar));