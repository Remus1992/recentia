import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import axios from '../../../axios-orders';

// Stateless Components
import LibraryToolbar from '../../components/LibraryToolbar/LibraryToolbar';
import Profile from '../../components/Profile/Profile';
import Header from '../../components/Header/Header';
// Stateful Component
import SearchBar from '../../components/SearchBar/SearchBar';

// CSS
import classes from './RecentiaClinicalLibrary.css'

// Sub-Containers
import Metathesaurus from './Metathesaurus/Metathesaurus';
import QualityMeasures from './QualityMeasures/QualityMeasures';
import CodeGroups from './CodeGroups/CodeGroups';
import CodingSystems from './CodingSystems/CodingSystems';
import ClinicalDictionary from './ClinicalDictionary/ClinicalDictionary';
import Translate from './Translate/Translate';

class recentiaClinicalLibrary extends Component {

    render() {
        return (
            <React.Fragment>
                <Profile/>
                <Header
                    header_title="Recentia Clinical Library"
                    link1_title="Home"
                    link1="/"
                    link2_title="Clinical Visit Support"
                    link2="/clinical_visit"/>
                <div className={classes.recentia_search}>
                    <LibraryToolbar/>
                    <SearchBar/>
                    {/*<Metathesaurus/>*/}
                </div>
                <Switch>
                    <Route path={this.props.match.url + "/metathesaurus"} component={Metathesaurus}/>
                    <Route path={this.props.match.url + "/quality_measures"} component={QualityMeasures}/>
                    <Route path={this.props.match.url + "/code_groups"} component={CodeGroups}/>
                    <Route path={this.props.match.url + "/coding_systems"} component={CodingSystems}/>
                    <Route path={this.props.match.url + "/clinical_dictionary"} component={ClinicalDictionary}/>
                    <Route path={this.props.match.url + "/translate"} component={Translate}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default recentiaClinicalLibrary;