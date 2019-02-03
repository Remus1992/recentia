import React, {Component} from 'react';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

// import axios from '../../../axios-orders';

// import Spinner from '../../../components/UI/Spinner/Spinner';

// import classes from './Languages.css'

class Translate extends Component {
    state = {
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.searching
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let API_version = '/getLanguages';
        if (!prevProps.searching) {
            console.log('API_VERSION: ' + API_version);
        }
    }

    componentDidMount() {
        let API_version = '/getLanguages';
        // if (!this.props.searching && this.props.searchTerm.length !== 0) {
        //     this.props.onSubmitSearchStart();
        //     this.props.onGetInfo(this.props.searching, API_version);
        // }
        this.setState({
            supportedLanguages: this.props.onGetInfo(null, API_version)
        });
    }

    render() {

        const supportLanguagesList = (supportedLangs) => {
            return supportedLangs.map(supportedLang => <option key={supportedLang.DisplayOrder} value={supportedLang.Abbreviation}>{supportedLang.Language}</option>)
        };

        return (
            <React.Fragment>
                <div>Translate</div>
                <select className="select-board-size">
                    {supportLanguagesList(this.state.supportedLanguages)}
                </select>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.search_term,
        loading: state.searchReducer.loading,
        getInfoItems: state.searchReducer.search_results,
        getInfoSubItems: state.searchReducer.search_sub_results,
        searching: state.searchReducer.searchSubmit,
        subComponent: state.searchReducer.subcomponent
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInfo: (SEARCH, API_VERSION) => dispatch(actions.getInfo(SEARCH, API_VERSION)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Translate);

