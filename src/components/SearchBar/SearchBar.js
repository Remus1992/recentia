import React, {Component} from 'react';
import classesSecondary from "./SearchBar.css";
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';
import Icon from '@material-ui/core/Icon';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Redirect } from "react-router-dom";

import * as actions from '../../store/actions/index';

import supportedLanguages from '../../api/languages';

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

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexGrow: 1,
    },
    iconClicked: {
        margin: theme.spacing.unit * 2,
        color: grey[400],
        '&:hover': {
            color: grey[800],
        },
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        color: grey[100],
        '&:hover': {
            color: grey[800],
        },
    },
    select: {
        color: 'black'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    state = {
        expanded: false,
        supportedLanguages: supportedLanguages,
    };

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

    handleSelectChange(event, lang_type) {
        if (lang_type === 'input') {
            this.props.onInputLangChange(event.target.value);
        } else if (lang_type === 'output') {
            this.props.onOutputLangChange(event.target.value);
        }

        if (this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
        }
    }

    render() {
        const {classes} = this.props;

        const supportLanguagesList = (supportedLangs) => {
            return supportedLangs.map(supportedLang => <MenuItem className={classes.select}
                                                                 value={supportedLang.Abbreviation}>{supportedLang.Language}</MenuItem>)
        };

        let searchRedirect = null;
        if (this.props.searching && window.location.pathname === '/') {
                searchRedirect = <Redirect to="/clinical_library/metathesaurus" />
        }

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classesSecondary.recentia_search_wrapper}>
                    {searchRedirect}
                    <form onSubmit={this.handleSubmit}>
                        <div className={classes.root}>
                            <TextField
                                placeholder="Search..."
                                style={{margin: 8}}
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.props.onSearchChange(e.target.value)}
                                value={this.props.searchTerm}
                            />
                            <Icon className={this.state.expanded ? classes.iconClicked : classes.iconHover}
                                  onClick={(e) => this.handleClick(e)}>
                                language
                            </Icon>
                        </div>
                        <div className={classesSecondary.languagePanel}
                             style={{maxHeight: this.state.expanded ? '150px' : null}}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-simple">Translate From...</InputLabel>
                                <Select
                                    value={this.props.inputLanguage}
                                    onChange={(e) => this.handleSelectChange(e, 'input')}
                                >
                                    {supportLanguagesList(this.state.supportedLanguages)}
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-simple">Translate To...</InputLabel>
                                <Select
                                    value={this.props.outputLanguage}
                                    onChange={(e) => this.handleSelectChange(e, 'output')}
                                >
                                    {supportLanguagesList(this.state.supportedLanguages)}
                                </Select>
                            </FormControl>
                        </div>
                    </form>

                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.search_term,
        inputLanguage: state.searchReducer.input_language,
        outputLanguage: state.searchReducer.output_language,
        searching: state.searchReducer.searchSubmit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInputLangChange: (in_lang) => dispatch(actions.getInputLanguage(in_lang)),
        onOutputLangChange: (out_lang) => dispatch(actions.getOutputLanguage(out_lang)),
        onSearchChange: (search) => dispatch(actions.getSearchTerm(search)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

// export default connect(null, mapDispatchToProps)(SearchBar);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchBar));