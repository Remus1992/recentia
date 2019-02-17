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
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

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

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
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
});


class SearchBar extends Component {
    state = {
        expanded: false,
        isToggleOn: true,
        supportedLanguages:
            [
                {"DisplayOrder": 1, "Abbreviation": "ALL", "Language": "All supported languages"},
                {"DisplayOrder": 2, "Abbreviation": "ENG", "Language": "English"},
                {"DisplayOrder": 3, "Abbreviation": "BAQ", "Language": "Basque"},
                {"DisplayOrder": 4, "Abbreviation": "CEL", "Language": "Celtic"},
                {"DisplayOrder": 5, "Abbreviation": "CHI", "Language": "Chinese"},
                {"DisplayOrder": 6, "Abbreviation": "CZE", "Language": "Czech"},
                {"DisplayOrder": 7, "Abbreviation": "DAN", "Language": "Danish"},
                {"DisplayOrder": 8, "Abbreviation": "DUT", "Language": "Dutch"},
                {"DisplayOrder": 9, "Abbreviation": "EST", "Language": "Estonian"},
                {"DisplayOrder": 10, "Abbreviation": "FIN", "Language": "Finnish"},
                {"DisplayOrder": 11, "Abbreviation": "FRE", "Language": "French"},
                {"DisplayOrder": 12, "Abbreviation": "GAE", "Language": "Gaelic"},
                {"DisplayOrder": 13, "Abbreviation": "GER", "Language": "German"},
                {"DisplayOrder": 14, "Abbreviation": "GRE", "Language": "Greek"},
                {"DisplayOrder": 15, "Abbreviation": "HEB", "Language": "Hebrew"},
                {"DisplayOrder": 16, "Abbreviation": "HUN", "Language": "Hungarian"},
                {"DisplayOrder": 17, "Abbreviation": "HWN", "Language": "Hawaiian"},
                {"DisplayOrder": 18, "Abbreviation": "ITA", "Language": "Italian"},
                {"DisplayOrder": 19, "Abbreviation": "JPN", "Language": "Japanese"},
                {"DisplayOrder": 20, "Abbreviation": "KOR", "Language": "Korean"},
                {"DisplayOrder": 21, "Abbreviation": "LAV", "Language": "Latvian"},
                {"DisplayOrder": 22, "Abbreviation": "NOR", "Language": "Norwegian"},
                {"DisplayOrder": 23, "Abbreviation": "POL", "Language": "Polish"},
                {"DisplayOrder": 24, "Abbreviation": "POR", "Language": "Portuguese"},
                {"DisplayOrder": 25, "Abbreviation": "RUS", "Language": "Russian"},
                {"DisplayOrder": 26, "Abbreviation": "SCR", "Language": "Croatian"},
                {"DisplayOrder": 27, "Abbreviation": "SPA", "Language": "Spanish"},
                {"DisplayOrder": 28, "Abbreviation": "SWE", "Language": "Swedish"},
                {"DisplayOrder": 29, "Abbreviation": "TUR", "Language": "Turkish"}
            ]
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
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
            return supportedLangs.map(supportedLang => <MenuItem value={supportedLang.Abbreviation}>{supportedLang.Language}</MenuItem>)
        };

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classesSecondary.recentia_search_wrapper}>
                    <form onSubmit={this.handleSubmit}>
                        {/*<input*/}
                        {/*type="text"*/}
                        {/*placeholder="Search"*/}
                        {/*onChange={(e) => this.props.onSearchChange(e.target.value)}*/}
                        {/*className={classesSecondary.search_bar}/>*/}
                        <div className={classes.root}>
                            <TextField
                                placeholder="Search..."
                                // className={classes.input}
                                style={{margin: 8}}
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.props.onSearchChange(e.target.value)}
                            />
                            <Icon className={this.state.expanded ? classes.iconClicked : classes.iconHover}
                                  onClick={(e) => this.handleClick(e)}>
                                language
                            </Icon>
                        </div>
                        <div className={classesSecondary.panel}
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