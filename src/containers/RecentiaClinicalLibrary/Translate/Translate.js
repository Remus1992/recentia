import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../../../store/actions";

import {getInfo} from "../../../api/translate_search";
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './Translate.css'

import Synonym from '../../../components/Subcomponents/Synonym/Synonym';

const getTranslatedTermList = (terms) => {
    if (terms) {
        return terms.map(item => (
            <Synonym
                key={item.Concept}
                termConcept={item.Concept}
                synonymCount={item.SynonymCount}
            >{item.PreferredTerm}</Synonym>
        ));
    }
};

class Translate extends Component {
    state = {
        translatedTermList: null,
        loading: false,
        // inputLanguage: 'ENG',
        // outputLanguage: 'ENG',
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

        this.handleSelectChange = this.handleSelectChange.bind(this);

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    async updateComponent() {
        let API_version = '/getTerms';
        // let INPUT_LANG = this.state.inputLanguage;
        // let OUTPUT_LANG = this.state.outputLanguage;

        this.setState({
            loading: true,
        });
        const {data} = await getInfo(this.props.searchTerm, API_version, this.props.inputLanguage, this.props.outputLanguage);
        this.setState({
            translatedTermList: data,
            loading: false,
        });
        this.props.onSubmitSearchSuccess();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.searching) {
            await this.updateComponent()
        }
    }

    async componentDidMount() {
        if (this.props.searchTerm.length !== 0) {
            this.props.onSubmitSearchStart();
            await this.updateComponent()
        }
    }

    handleSelectChange(event, lang_type) {
        // this.setState({
        //     [value] : event.target.value
        // });
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

        const supportLanguagesList = (supportedLangs) => {
            return supportedLangs.map(supportedLang => <option key={supportedLang.DisplayOrder}
                                                               value={supportedLang.Abbreviation}>{supportedLang.Language}</option>)
        };

        return (
            <React.Fragment>
                <section className={classes.container}>
                    <p>Translate from...</p>
                    <div className={classes.dropdown}>
                        <select
                            name="one"
                            className={classes["dropdown-select"]}
                            onChange={(e) => this.handleSelectChange(e, 'input')}
                            value={this.props.inputLanguage}>
                            {supportLanguagesList(this.state.supportedLanguages)}
                        </select>
                    </div>
                    <p>Translate to...</p>
                    <div className={[classes.dropdown, classes["dropdown-dark"]].join(' ')}>
                        <select
                            name="two"
                            className={classes["dropdown-select"]}
                            onChange={(e) => this.handleSelectChange(e, 'output')}
                            value={this.props.outputLanguage}>
                            {supportLanguagesList(this.state.supportedLanguages)}
                        </select>
                    </div>

                </section>
                <div>{(this.state.loading) ? <Spinner/> : getTranslatedTermList(this.state.translatedTermList)}</div>
            </React.Fragment>
        );
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
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart()),
        onSubmitSearchSuccess: () => dispatch(actions.submitSearchSuccess())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Translate);

