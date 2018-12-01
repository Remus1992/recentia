import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
// import axios from '../../../axios-orders';

// Components
import LibraryToolbar from '../../components/LibraryToolbar/LibraryToolbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Profile from '../../components/Profile/Profile';
import Header from '../../components/Header/Header';

// CSS
import classes from './RecentiaClinicalLibrary.css'

// Sub-Containers
import Dictionary from './Dictionary/Dictionary';
import Metathesaurus from './Metathesaurus/Metathesaurus';
import CodingSystems from './CodingSystems/CodingSystems';
import ValueSets from './ValueSets/ValueSets';
import Languages from './Languages/Languages';

class recentiaClinicalLibrary extends Component {
    state = {
        definitions: null
    };

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
                </div>
                <Switch>
                    <Route path={this.props.match.url + "/dictionary" } component={Dictionary}/>
                    <Route path={this.props.match.url + "/metathesaurus"} component={Metathesaurus}/>
                    <Route path={this.props.match.url + "/coding_systems"} component={CodingSystems}/>
                    <Route path={this.props.match.url + "/value_sets"} component={ValueSets}/>
                    <Route path={this.props.match.url + "/languages"} component={Languages}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default recentiaClinicalLibrary;