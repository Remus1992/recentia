import React, {Component} from 'react';
import LibraryToolbar from '../../../components/LibraryToolbar/LibraryToolbar';

import axios from '../../../axios-orders';

import Profile from '../../components/Profile/Profile';
import HeaderLibrary from '../../components/Header/HeaderLibrary';

import classes from './RecentiaClinicalLibrary.css'

class Dictionary extends Component {
    state = {
        definitions: null
    };

    render() {
        return (
            <React.Fragment>
                <Profile/>
                <HeaderLibrary/>

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

export default Dictionary;