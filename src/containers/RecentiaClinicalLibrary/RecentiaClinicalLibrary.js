import React, {Component} from 'react';
import LibraryToolbar from '../../components/LibraryToolbar/LibraryToolbar';

// import axios from '../../../axios-orders';

import Profile from '../../components/Profile/Profile';
import Header from '../../components/Header/Header';

import classes from './RecentiaClinicalLibrary.css'

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
                    link2="/clinical_visit_support"/>
                <div className={classes.recentia_search}>
                    <div className={classes.recentia_search_wrapper}>
                        <input type="text" placeholder="Search" className={classes.search_bar}/>
                    </div>
                    <LibraryToolbar/>
                </div>
            </React.Fragment>
        );
    }
}

export default recentiaClinicalLibrary;