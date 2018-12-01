import React, {Component} from 'react';

// import axios from '../../../axios-orders';

import Profile from '../../components/Profile/Profile';
import Header from '../../components/Header/Header'

import classes from './RecentiaClinicalVisitSupport.css'

class recentiaClinicalVisitSupport extends Component {
    state = {
        element: null
    };

    render() {
        return (
            <React.Fragment>
                <Profile/>
                <Header
                    header_title="Recentia Clinical Visit Support"
                    link1_title="Home"
                    link1="/"
                    link2_title="Clinical Library"
                    link2="/clinical_library"/>
                <h1 className={classes.placeholder}>Under Development</h1>
            </React.Fragment>
        );
    }
}

export default recentiaClinicalVisitSupport;