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

// function updateState(text) {
//     this.setState({text})
// }

// class SearchBar extends Component {
//     render() {
//         return (
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search"
//                     onChange={(e) => updateText(e.target.value)}/>
//             </div>
//         )
//     }
// }

// function updateText(text) {
//     this.setState({
//         text
//     })
// }

// class Metathesaurus extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "Initial State"
//         };
//         updateText = updateText.bind(this)
//     }
//
//     render() {
//         return (
//             <React.Fragment>
//                 <form>
//                     <input
//                         placeholder="Search for..."
//                         ref={input => this.search = input}
//                         // onChange={this.handleInputChange}
//                     />
//                     <p>Meta</p>
//                     <p>{this.state.text}</p>
//                     {/*<p>{this.state.query}</p>*/}
//                 </form>
//                 {/*<div>{items}</div>*/}
//             </React.Fragment>
//         );
//     }
// }

class recentiaClinicalLibrary extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: "Initial Text"
    //     };
    //     this.updateText1 = this.updateText1;
    // }
    //
    // updateText1 = (text) => {
    //     this.setState({text})
    // };

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