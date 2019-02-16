import React, {Component} from 'react';
import classesSecondary from "./SearchBar.css";
import {connect} from 'react-redux';
// import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

import * as actions from '../../store/actions/index';

const color = "#fff";

const theme = createMuiTheme({
    palette: {
        common: {black: color, white: color},
        primary: {main: color, dark: color, light: color},
        text: {primary: color, secondary: color}
    },
    overrides: {
        MuiInput: {
            underline: {
                "&:before": {
                    borderBottom: `1px solid ${color}`
                }
            }
        }
    }
});


class SearchBar extends Component {
    state = {
        expanded: false,
        isToggleOn: true
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmitSearchStart();
        event.preventDefault();
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
        return (
            <MuiThemeProvider theme={theme}>
                <div className={classesSecondary.recentia_search_wrapper}>
                    <form onSubmit={this.handleSubmit}>
                        {/*<input*/}
                        {/*type="text"*/}
                        {/*placeholder="Search"*/}
                        {/*onChange={(e) => this.props.onSearchChange(e.target.value)}*/}
                        {/*className={classesSecondary.search_bar}/>*/}
                        <TextField
                            placeholder="Search..."
                            // className={classes.input}
                            style={{margin: 8}}
                            fullWidth
                            margin="normal"
                            onChange={(e) => this.props.onSearchChange(e.target.value)}
                            // InputProps={{
                            //     className: classes.input,
                            // }}
                        />
                        {/*<button*/}
                        {/*className={this.state.expanded ? [classesSecondary.accordion, classesSecondary.active].join(' ') : classesSecondary.accordion}*/}
                        {/*onClick={(e) => this.handleClick(e)}>Filter</button>*/}
                        {/*<div className={classesSecondary.panel} style={{maxHeight: this.state.expanded ? '150px' : null}}>*/}
                        {/*<p>Translate</p>*/}
                        {/*</div>*/}

                    </form>
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (search) => dispatch(actions.getSearchTerm(search)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(null, mapDispatchToProps)(SearchBar);
// export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBar));