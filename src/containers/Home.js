import React, {Component} from 'react';

import axios from '../axios-orders';

import Profile from '../components/Profile/Profile';
import HeaderHome from '../components/Header/HeaderHome';

import classes from './Home.css'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Profile/>
                <HeaderHome />

                <div className={classes.recentia_search}>
                    <div className={classes.recentia_search_wrapper}>
                        <input type="text" placeholder="Search" className={classes.search_bar}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;