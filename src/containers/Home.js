import React, {Component} from 'react';

// import axios from '../axios-orders';

import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
// import SearchBar from '../components/SearchBar/SearchBar';

import classes from './Home.css'
import {Route, Switch} from "react-router-dom";

import RecentiaClinicalLibrary from './RecentiaClinicalLibrary/RecentiaClinicalLibrary';
import RecentiaClinicalVisitSupport from './RecentiaClinicalVisitSupport/RecentiaClinicalVisitSupport';
// import HeaderNavItem from "../components/Header/HeaderNavItems/HeaderNavItem/HeaderNavItem";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Profile/>
                <Header
                    header_title="Recentia"
                    link1_title="Clinical Library"
                    link1="/clinical_library"
                    link2_title="Clinical Visit Support"
                    link2="/clinical_visit" />

                <div className={classes.recentia_search}>
                    {/*<SearchBar/>*/}
                </div>
                <Switch>
                    <Route path="/clinical_library" component={RecentiaClinicalLibrary}/>
                    <Route path="/clinical_visit" component={RecentiaClinicalVisitSupport}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Home;